const mongoose = require('mongoose')

module.exports = app => {
    mongoose.connect('mongodb://localhost:27017/node-vue-moba',{
        useNewUrlParser: true
    })
}