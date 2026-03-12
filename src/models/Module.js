const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
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

// to make virtual field for lessons in module
moduleSchema.virtual("lessons", {
  ref: "Lesson",
  localField: "_id",
  foreignField: "module"
});
// to include virtuals in JSON response
moduleSchema.set("toJSON", { virtuals: true });


const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;
