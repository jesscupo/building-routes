const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
  res.send("pong!");
});

app.get("/welcome", (req, res) => {
  res.send("Welcome to my server.");
});
// Build your routes here

module.exports = app;
