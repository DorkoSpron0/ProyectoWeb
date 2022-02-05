const { Schema,model } = require("mongoose");

const comments = new Schema({
    title:{type: String, required:true,},
    description:{type: String, required:true},
    author:{type: String, default:'No one'}
})

module.exports = new model('Comments', comments)