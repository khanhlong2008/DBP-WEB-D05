const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const db = {};

const connectToMongo = async () => {
  await client.connect();
  console.log("DB Connection established!");
  database = client.db("web_d05_mongo");

  db.users = database.collection("users");
  db.classes = database.collection("classes");
};
module.exports = { connectToMongo, db };
