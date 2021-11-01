const express = require("express");
const { db } = require("../databases");
const router = express.Router();

router.get("/", async (req, res) => {
  const students = await db.students.find({ age: 21 }).toArray();
  // lay students tu db ra
  res.json(students);
  // toArray() bien db thanh array de tra ve client
});

module.exports = router;
