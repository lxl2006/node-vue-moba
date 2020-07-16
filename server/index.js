const express = require('express')
const path = require('path')
const app = express()

// 处理跨域
app.use( require('cors')())
// 能够处理json
app.use(express.json())
// 处理静态资源-图像
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// 数据库的连接、相关操作
require('./plugins/mongoose')(app)

// 后台管理的路由配置,如果是路径是文件夹，node会查找文件夹下的index.js
require('./routes/admin/index')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000');
})