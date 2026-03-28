const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
   
   },
  
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  lesson: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson"
  }],
},{timestamps: true});


const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;
