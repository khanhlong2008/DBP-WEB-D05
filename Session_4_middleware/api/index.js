const express = require('express');
const studentsRouter = require("./students")
const classesRouter = require("./classes")
const authRouter = require("./auth")

const router = express.Router();

router.use("/students", studentsRouter)
router.use("/classes", classesRouter)
router.use("/auth", authRouter)

module.exports = router;