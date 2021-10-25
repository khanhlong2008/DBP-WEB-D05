const express = require("express");
const chalk = require("chalk");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  fs.readFile("./index.html", "utf8", (err, data) => {
    if (!err) {
      res.set(200, "Content-Type", "text/html");
      res.send(data);
    }
  });
});
app.get("/test", (req, res) => {
  res.send("hello this is a test massage");
});
app.get("/json", (req, res) => {
  res.json({
    hello: "world",
  });
});
app.use();
app.listen(5000, () => {
  console.log(chalk.green("App is running at 5000"));
});
