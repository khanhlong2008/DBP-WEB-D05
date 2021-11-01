const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const db = {};

const connectToMogno = async () => {
  await client.connect();
  console.log("MongoDB");
  const database = client.db("web-d05");
  db.students = database.collection("students")
};

module.exports = { connectToMogno, db };
