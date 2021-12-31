const path = require("path");
const express = require("express");
const app = express();

const { getWeather, getWeatherForecast, getLocationImage } = require("./utils");

app.use(express.static("dist"));
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.post("/getweather", getWeather);

app.post("/getweatherforecast", getWeatherForecast);

app.post("/getlocationimage", getLocationImage);

module.exports = { app };
