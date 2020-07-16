<template>
  <!-- 新增分类和编辑分类公用的组件 -->
  <div>
    <h1>{{ id ? '编辑' : '新建'}}广告位</h1>
    <!-- 表单中按钮的native-type是submit，点击它后会触发下面的事件，native表示原生表单，prevent阻止默认提交 -->
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-button type="text" @click="model.items.push({})">
        <i class="el-icon-plus"></i>新增广告
      </el-button>
      <el-form-item label="广告">
        <el-row type="flex" style="flex-wrap:wrap;">
          <el-col :md="12" v-for="(item, i) in model.items" :key="i">
            <el-form-item label="图像">
              <el-upload
                class="avatar-uploader"
                :action="axios.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :on-success="res => $set(item, 'image', res.url)"
              >
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="描述">
              <el-input v-model="item.description" type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="小提示">
              <el-input v-model="item.tips" type="textarea"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="model.skills.splice(i, 1)" type="danger">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  // 接收URL中的参数
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        items: []
      }
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        // put请求来提交修改请求
        res = await this.axios.put(`rest/ads/${this.id}`, this.model);
      } else {
        res = await this.axios.post("rest/ads", this.model);
      }
      this.$router.push("/ads/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    // 获取对应数据
    async fetch() {
      const { data: res } = await this.axios.get(`rest/ads/${this.id}`);
      Object.assign({}, this.model, res);
      // this.model = res;
    }
  },
  created() {
    // 如果有id,表示编辑操作，这时才获取对应数据
    this.id && this.fetch();
  }
};
</script>

<style>
</style>