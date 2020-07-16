<template>
  <div>
    <h1>分类列表</h1>
    <!-- 给表格绑定一个数组，表格每一列绑定数组中的对象的相应属性 -->
    <el-table :data="items">
      <!-- prop表示数据的字段名 -->
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="parent.name" label="上级分类" width="220"></el-table-column>
      <el-table-column prop="name" label="名称" width="140"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <!-- scope表示当前行的数据本身 -->
        <template slot-scope="scope">
          <!-- scope.row._id就是当前行数据在mongodb中的_id -->
          <el-button type="text" size="small" @click="$router.push(`/categories/edit/${scope.row._id}`)">编辑</el-button>
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
    // 获取分类列表，绑定数据。
    async fetch() {
      const { data: res } = await this.axios.get("rest/categories");
      this.items = res;
    },
    async remove(row) {
        this.$confirm(`是否确认删除分类 ${row.name}`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          await this.axios.delete(`rest/categories/${row._id}`)
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