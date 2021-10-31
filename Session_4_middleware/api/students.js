const express = require("express");

const router = express.Router();

const students = [
  { id: 1, name: "Alice", age: "20" },
  { id: 2, name: "Bob", age: "22" },
  { id: 3, name: "Cris", age: "23" },
];

const logger = (req, res, next) => {
  console.log("New req at" + new Date());
  next();
};

router.use(logger)

router.get("/", (req, res) => {
  res.json(students);
});
router.get("/:id", (req, res) => {
  const student = students.find((s) => s.id === Number(req.params.id));
  res.json(student);
});
router.post("/", () => {});
router.put("/:id", () => {});
router.delete("/:id", () => {});

module.exports = router;
