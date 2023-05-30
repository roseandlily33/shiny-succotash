const router = require('express').Router();
const {

} = require('../../controllers/studentController');

//api/students
router.route('/')

//api/students/:studentId
router.route('/:studentId')

//api/students/:studentId/assignments
router.route('/:studentId/assignment')

//api/students/:studentId/assignments/:assignmentId
router.route('/:studentId/assignment/:assignmentId')

module.exports = router;