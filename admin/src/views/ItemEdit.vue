<template>
  <!-- 新增分类和编辑分类公用的组件 -->
  <div>
    <h1>{{ id ? '编辑' : '新建'}}物品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <!-- 点击此按钮，选择图片，就实现了上传！ -->
        <!-- action是后台接口地址，是组件内部的ajax请求，所以需要完整地址 -->
        <!-- on-success是上传后用于接收服务器响应的函数 -->
        <el-upload
          class="avatar-uploader"
          :action="axios.defaults.baseURL + '/upload'" 
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
      model: {}
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.axios.put(`rest/items/${this.id}`, this.model);
      } else {
        res = await this.axios.post("rest/items", this.model);
      }
      this.$router.push("/items/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const { data: res } = await this.axios.get(`rest/items/${this.id}`);
      this.model = res;
    },
    afterUpload(res) {
      // console.log(res.url)
      // Vue的响应式问题，model开始是空对象，没有icon属性，所以用$set来赋值
      this.$set(this.model, 'icon', res.url)
      // this.model.icon = res.url
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>>

