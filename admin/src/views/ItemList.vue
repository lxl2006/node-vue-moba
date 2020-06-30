<template>
  <div>
    <h1>物品列表</h1>
    <!-- 给表格绑定一个数组，表格每一列绑定数组中的对象的相应属性 -->
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="name" label="物品名称" width="140"></el-table-column>
      <el-table-column prop="icon" label="物品图标" width="140">
        <template slot-scope="scope">
          <img :src="scope.row.icon" style="height: 3rem;">
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push(`/items/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      const { data: res } = await this.axios.get("rest/items");
      this.items = res;
    },
    async remove(row) {
        this.$confirm(`是否确认删除分类 ${row.name}`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          await this.axios.delete(`rest/items/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.fetch()
        })
    }
  },
  created() {
    this.fetch();
  }
};
</script>