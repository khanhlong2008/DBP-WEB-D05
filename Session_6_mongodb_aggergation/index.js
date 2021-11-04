const express = require("express");
const authApi = require("./api/auth");
const classesApi = require("./api/classes");
const { connectToMongo } = require("./db");

const app = express();
app.use(express.json());

app.use("/auth", authApi);
app.use("/classes", classesApi);
connectToMongo();

app.listen(5000, () => {
  console.log("App is running at 5000");
});
