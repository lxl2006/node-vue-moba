<template>
    <el-card shadow="hover">
        <div slot="header">
            <span>请先登录</span>
        </div>
        <div class="LoginForm">
            <el-form @submit.native.prevent="login">
                <el-form-item label="用户名">
                    <el-input type="text" v-model="model.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input show-password v-model="model.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="submit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            model: {}
        }
    },
    methods: {
        async login() {
            const { data: res} = await this.axios.post('login',this.model);
            localStorage.token = res.token
            this.$router.push('/')
            this.$message({
                type: 'success',
                message: '登陆成功'
            })
        }
    }
}
</script>

<style scoped>
    .el-card {
        width: 30rem;
        margin: 10rem auto;
    }
</style>