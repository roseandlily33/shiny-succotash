const router = require('express').Router();
const {

} = require('../../controllers/courseController');

//api/courses
router.route('/')

//api/courses/:courseId
router.route('/:courseId')

module.exports = router;