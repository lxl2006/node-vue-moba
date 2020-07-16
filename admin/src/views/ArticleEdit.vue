<template>
  <!-- 新增分类和编辑分类公用的组件 -->
  <div>
    <h1>{{ id ? '编辑' : '新建'}}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="文章分类">
        <el-select v-model="model.categories" placeholder="请选择" multiple> 
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容s">
        <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  // 接收URL中的参数
  props: {
    id: {}
  },
  components: {
    VueEditor
  },
  data() {
    return {
      model: {},
      categories: []
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.axios.put(`rest/articles/${this.id}`, this.model);
      } else {
        res = await this.axios.post("rest/articles", this.model);
      }
      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const { data: res } = await this.axios.get(`rest/articles/${this.id}`);
      this.model = res;
    },
    async fetchCategories() {
      const { data: res } = await this.axios.get(`rest/categories`);
      this.categories = res
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {

      var formData = new FormData();
      formData.append("file", file);

      const { data: res } = await this.axios.post('upload', formData)
      Editor.insertEmbed(cursorLocation, "image", res.url)
      resetUploader()
      // axios({
      //   url: "https://fakeapi.yoursite.com/images",
      //   method: "POST",
      //   data: formData
      // })
      //   .then(result => {
      //     let url = result.data.url; // Get url from response
      //     Editor.insertEmbed(cursorLocation, "image", url);
      //     resetUploader();
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  },
  created() {
    this.fetchCategories()
    this.id && this.fetch();
  }
};
</script>

<style>
</style>