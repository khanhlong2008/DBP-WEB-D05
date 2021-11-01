const express = require('express');
const studentsRouter = require('./students.js')
const router = express.Router();

router.use("/students",studentsRouter);

module.exports = router;