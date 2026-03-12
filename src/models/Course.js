const mongoose = require("mongoose");


const courseSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},
{timestamps:true});

// to make virtual field for modules in course
courseSchema.virtual("modules", {
    ref: "Module",
    localField: "_id",
    foreignField: "course"
});
// to include virtuals in JSON response
courseSchema.set("toJSON", { virtuals: true });

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
