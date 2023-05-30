const router = require('express').Router();
const studentRoutes = require('./studentRoutes');
const courseRoutes = require('./courseRoutes');

router.use('/students', studentRoutes);
router.use('/courses', courseRoutes);

module.exports = router;