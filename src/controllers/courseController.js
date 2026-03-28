
const Course = require("../models/Course");
const Module = require("../models/Module");
const Lesson = require("../models/Lesson");

// Create Course with admin only

const createCourse = async (req, res) => {
    try {
        const { title, description, instructor } = req.body;
// create new course instance
        const course = new Course({
            title,
            description,
            instructor
        });
        
// save course to database
        const savedCourse = await course.save();
// send response
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

//get all courses with modules and lessons
const getCoursesWithModules = async (req, res) => {
    try {
       
        const courses = await Course.find()
            .populate({
                path: 'modules', 
                populate: {
                    path: 'lesson', 
                    model: 'Lesson'   
                }
            })

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
    getCoursesWithModules,
    getCourseById,
    updateCourse,
    deleteCourse,
}
