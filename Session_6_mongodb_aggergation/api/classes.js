const express = require("express");
const ClassController = require("../controllers/ClassController");
const router = express.Router();

router.get("/", async (req, res) => {
  const classes = await ClassController.getAllclassesWithTeacher();
  res.json(classes);
});

module.exports = router;
