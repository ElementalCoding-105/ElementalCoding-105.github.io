// Import essential libraries
const express = require("express");
const app = express();
const path = require("path");

// const router = express.app();
// eslint-disable-next-line no-undef
app.use(express.static(__dirname + "/public"));
// Setup essential routes
app.get("/", function (req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.get("/docs/*", function (req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "/public/docs/index.html"));
});
app.get("/assets/*", function (req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "/public/401.html"));
});
app.get('/hello', function (req, res) {
  res.status(200).json({
    message: "Hello World!"
  });
});
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + "/public/404.html"));
});
module.exports = { app };