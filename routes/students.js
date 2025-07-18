const {createStudent,getAllStudents} = require('../controller/students')
const express = require('express');
const router = express.Router();

router.post('/',createStudent);
router.get('/',getAllStudents);

module.exports = router;