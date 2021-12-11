import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import db from ("./config/keys").mongoURI;

const app = express();
// Use BodyParser Middleware
app.use(bodyParser.json());
// db Config
app.get("/hello", (req, res) => {
  res.send("hello word");
});
app.listen(1337, () => {
  console.log("server started");
});
