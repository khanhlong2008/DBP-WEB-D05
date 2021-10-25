const express = require("express");
const app = express();

const students = [
  { name: "Alice", age: 23 },
  { name: "Bob", age: 13 },
];

app.listen(3000, () => {
  console.log("App is running at 3000");
});
