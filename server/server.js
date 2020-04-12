const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

const app = express();

// returns middleware that parses json
app.use(bodyParser.json());

// parses urlencoded bodies (UTF-8) - converts reserved characters in URLS to formats understood by browsers
app.use(bodyParser.urlencoded({ extended: true }));

// serve static CSS/image files
app.use("/", express.static(path.join(__dirname, "../client/src/assets")));
app.use(express.static("../client/build"));

// refreshing within a page will boot you back to mainpage
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

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
