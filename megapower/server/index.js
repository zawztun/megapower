const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const expressValidator = require("express-validator");
const port = process.env.PORT || 8000;
require("dotenv").config();
require("dotenv").config({ path: "./.env" });


//check env variables
if (!process.env.MONGO_URI) {
    console.log("The .env file is not configured.");
    process.exit();
  }

//app set up
const app = express();

//Database set up
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected ...");
  });

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


app.get('/', (req,res) =>{
    res.send({"Hi": "Welcome to MegaPower!"})
})

app.get('/test', (req,res) =>{
    res.send({"Test": "You've reached MegaPower Backend!"})
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
