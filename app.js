const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const validator = require("validator");
const router = require("./src/Routes/api");

//Security middleware

app.use(express.json());
app.use(router);
app.use(cors());
app.use(helmet());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
  })
);
app.use(mongoSanitize());
app.use(hpp());

//optional express static method

app.use(express.static("./public"));

//Routes
app.use(router);

//Handle undefined routes(404)
app.use("*", (req, res) => {
  res.status(404).json({ status: "error", message: "Route not found" });
});
module.exports = app;
