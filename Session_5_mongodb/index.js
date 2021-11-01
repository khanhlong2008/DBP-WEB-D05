const express = require('express');
const {connectToMogno} = require("./databases");
const api = require('./apis')

const app = express();
app.use(express.json());
app.use(api)

app.listen(5000,()=>{
    console.log("App is running at 5000")
    connectToMogno();
});

