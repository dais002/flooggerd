require("dotenv").config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

const app = express();

// connect to mongodb
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "meeshandstan-eats",
});
const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connected to Database..."));

// returns middleware that parses json
app.use(bodyParser.json());

// parses urlencoded bodies (UTF-8) - converts reserved characters in URLS to formats understood by browsers
app.use(bodyParser.urlencoded({ extended: true }));

// serve static CSS/image files
app.use("/", express.static(path.join(__dirname, "../client/src/assets")));
app.use(express.static("../client/build"));

// add routers
const recipeRouter = require("./routes/recipes");
app.use("/api/recipes", recipeRouter);

const listsRouter = require("./routes/lists");
app.use("/api/lists", listsRouter);

// unknown endpoint handler
app.use("*", (req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: "express error - global",
    status: 400,
    message: { err: "error occurred - global" },
  };
  const error = { ...defaultError, err };
  console.log(error.log);
  return res.status(error.status).json(error.message);
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));

module.exports = app;
