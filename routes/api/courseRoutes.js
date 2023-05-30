const router = require('express').Router();
const {
    getCourses,
    getOneCourse,
    createCourse,
    updateCourse,
    deleteCourse,

} = require('../../controllers/courseController');

//api/courses
router.route('/').get(getCourses).post(createCourse);

//api/courses/:courseId
router.route('/:courseId').get(getOneCourse).put(updateCourse).delete(deleteCourse);

module.exports = router;