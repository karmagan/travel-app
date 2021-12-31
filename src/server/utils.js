const http = require("http");
const { resolve } = require("path");
const axios = require("axios");

//retrieve current weather from weatherbit
function getWeather(request, response) {
  url = `http://api.geonames.org/searchJSON?q=${request.body.q}&maxRows=10&username=${process.env.GEONAMES_USERNAME}`;
  axios
    .get(url)
    .then(({ data }) => {
      return axios.get(
        `http://api.weatherbit.io/v2.0/current?key=c58681373ef6452cb2d0fb34b93b6da4&lat=${data.geonames[0].lat}&lon=${data.geonames[0].lng}`
      );
    })
    .then(({ data }) => response.send(data));
}

//retrieve weather forecast from weatherbit
function getWeatherForecast(request, response) {
  url = `http://api.geonames.org/searchJSON?q=${request.body.q}&maxRows=10&username=protea`;
  axios
    .get(url)
    .then(({ data }) => {
      return axios.get(
        `http://api.weatherbit.io/v2.0/forecast/daily?key=c58681373ef6452cb2d0fb34b93b6da4&lat=${data.geonames[0].lat}&lon=${data.geonames[0].lng}`
      );
    })
    .then(({ data }) => response.send(data));
}
// retrieve location image from pixabay API
function getLocationImage(req,res) {
  url = `https://pixabay.com/api?key=25034508-455eea38330486b53c60b322b&q=${req.body.q}&image_type=photo`;
  axios.get(url).then(({ data }) => res.send(data));
}

module.exports = { getWeather, getWeatherForecast, getLocationImage };
