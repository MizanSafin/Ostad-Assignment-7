const express = require("express");
const app = express();
const router = require("./src/Routes/api");

app.use(router);
app.use(express.static("./public"));
//Handle undefined routes(404)
app.use("*", (req, res) => {
  res.status(404).json({ status: "error", message: "Route not found" });
});
module.exports = app;
