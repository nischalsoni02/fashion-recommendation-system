const express = require("express");
const app = express();
app.use("/", (req, res, next) => {
  console.log("route working");
  res.json({
    name: "server",
  });
});

module.exports = app;
