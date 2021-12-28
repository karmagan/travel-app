const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("dist"));
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});