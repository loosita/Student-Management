const {createCourses,getAllCourses} = require('../controller/courses');
const express = require('express');
const router = express.Router();

router.get('/',getAllCourses);
router.post('/',createCourses);

module.exports = router;