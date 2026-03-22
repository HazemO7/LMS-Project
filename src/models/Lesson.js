const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  module: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Module",
   
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  content: {
    type: String,
    required: true
  }
},{timestamps: true});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
