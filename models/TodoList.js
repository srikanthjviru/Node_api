const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo: { type: String, required: false },
  complete: { type: Boolean, required: false },
  firstName: { type: String, required: false }
});

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;
