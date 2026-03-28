

const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courseController");
const authMidleware = require("../Middleware/authmiddleware");

router.post("/", authMidleware , courseController.createCourse);
router.get("/", courseController.getCourses);
router.get("/coursesWit", courseController.getCoursesWithModules);
router.get("/:id", courseController.getCourseById);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", authMidleware, courseController.deleteCourse);


module.exports = router;