const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Module',
        required: true
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
  }
},{timestamps: true});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
