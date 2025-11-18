//Sample schema : 
// Todo{
//     title:String;
//     description: String;
//     completed: Boolean;
// }

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:Bh%407204517094@cluster0.zjn1vva.mongodb.net/Todo_app")

const todoSchema = mongoose.Schema({
    title:String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('Todo_app',todoSchema);
module.exports = {
    todo
}