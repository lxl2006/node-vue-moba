<template>
  <!-- 新增分类和编辑分类公用的组件 -->
  <div>
    <h1>{{ id ? '编辑' : '新建'}}账号</h1>
    <!-- 表单中按钮的native-type是submit，点击它后会触发下面的事件，native表示原生表单，prevent阻止默认提交 -->
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="账户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
			<el-form-item label="密码">
        <el-input v-model="model.password"></el-input>
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
      model: {},
      parents: []
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        // put请求来提交修改请求
        res = await this.axios.put(`rest/admin_users/${this.id}`, this.model);
      } else {
        res = await this.axios.post("rest/admin_users", this.model);
      }
      this.$router.push("/admin_users/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    // 获取对应数据
    async fetch() {
      const { data: res } = await this.axios.get(`rest/admin_users/${this.id}`);
      this.model = res;
    },
  },
  created() {
    // 如果有id,表示编辑操作，这时才获取对应数据
    this.id && this.fetch();
  }
};
</script>

<style>
</style>