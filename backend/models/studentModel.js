// const mongoose = require("mongoose");

// const taskSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   completed: { type: Boolean, default: false },
// });

// module.exports = mongoose.model("Task", taskSchema);


import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  course: String,
  age: Number
});

export default mongoose.model("Student", studentSchema);
