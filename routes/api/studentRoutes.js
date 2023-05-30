const router = require('express').Router();
const {
    getStudents,
    getOneStudent,
    createStudent,
    deleteStudent,
    addAssignment,
    deleteAssignment
} = require('../../controllers/studentController');

//api/students
router.route('/').get(getStudents).post(createStudent);

//api/students/:studentId
router.route('/:studentId').get(getOneStudent).delete(deleteStudent);

//api/students/:studentId/assignments
router.route('/:studentId/assignment').post(addAssignment);

//api/students/:studentId/assignments/:assignmentId
router.route('/:studentId/assignment/:assignmentId').delete(deleteAssignment);

module.exports = router;