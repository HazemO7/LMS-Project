
const Course = require("../models/Course");


// Create Course

const createCourse = async (req, res) => {
    try {
        const { title, description, instructor } = req.body;

        const course = new Course({
            title,
            description,
            instructor
        });

        const savedCourse = await course.save();

        res.status(201).json({
            status: "success",
            data: savedCourse
        });

    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};


// Get All Courses
const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();

        res.json({
            status: "success",
            results: courses.length,
            data: courses
        });

    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};
// Get Course By ID
const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({
                status: "fail",
                message: "Course not found"
            });
        }

        res.json({
            status: "success",
            data: course
        });

    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};
// Get Course with Modules and Lessons
const getCourseWithContent = async (req, res) => {
  try {

    const course = await Course.findById(req.params.id)
      .populate({
        path: "modules",
        populate: {
          path: "lessons"
        }
      });

    if (!course) {
      return res.status(404).json({
        status: "fail",
        message: "Course not found"
      });
    }

    res.json({
      status: "success",
      data: course
    });

  } catch (error) {

    res.status(500).json({
      status: "error",
      message: error.message
    });

  }
};
// Update Course

const updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!course) {
            return res.status(404).json({
                status: "fail",
                message: "Course not found"
            });
        }

        res.json({
            status: "success",
            data: course
        });

    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

// Delete Course
const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);

        if (!course) {
            return res.status(404).json({
                status: "fail",
                message: "Course not found"
            });
        }

        res.json({
            status: "success",
            message: "Course deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};



module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
    getCourseWithContent,
}
