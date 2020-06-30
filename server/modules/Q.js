const mongoose = require('mongoose')

/* 单选题 */
new mongoose.Schema({
    tag: { type: String},
    type: { type: String},
    author: { type: String},
    year: { type: String},
    difficulty: { type: String},
    title: { type: String},
    options: { type: Array},
    answer: { type: String},
    solution: { type: String},
})