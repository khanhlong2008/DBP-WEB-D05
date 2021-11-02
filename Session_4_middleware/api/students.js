const express = require("express");
const logger = require("../middlewares/logger");
const router = express.Router();
const authentication = require("../middlewares/auth");
const students = [
  { id: 1, name: "Alice", age: "20" },
  { id: 2, name: "Bob", age: "22" },
  { id: 3, name: "Cris", age: "23" },
];

// router.use(logger)

router.get("/", logger, authentication, (req, res) => {
  console.log(req.user)
  res.json(students);
});
router.get("/:id", logger,authentication, (req, res) => {
  const student = students.find((s) => s.id === Number(req.params.id));
  res.json(student);
});
router.post("/", logger, () => {});
router.put("/:id",authentication, () => {});
router.delete("/:id", () => {});

module.exports = router;
