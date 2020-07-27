const mongoose = require('mongoose')

module.exports = app => {
    mongoose.connect('mongodb://localhost:27017/node-vue-moba',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    // require-all 解决了mongoose.model引入模型时报错：没有schema。
    require('require-all')(__dirname + '/../modules')
}