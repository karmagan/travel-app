function updateWeatherInfo(data) {
  document.querySelector("#weather-info").innerHTML =
    Client.getWeatherInfo(data);
}

function updateLocationImage(data) {
  document.querySelector("#location-image").src = data.hits[0].webformatURL;
}

export function submitHandler(e) {
  e.preventDefault();

  const date = new Date(document.querySelector("#date").value);
  if (date == "Invalid Date") {
    document.querySelector("#weather-info").innerHTML =
      "Please enter a valid date";
  } else {
    const q = document.querySelector("#q").value;
    console.log(date);
    if (date < Date.now()) {
      document.querySelector("#weather-info").innerHTML =
        "You chose a past date. Please enter a valid date";
    } else if (date.setDate(date.getDate() - 7) > Date.now()) {
      Client.postData("http://localhost:3030/getweatherforecast", { q }).then(
        (data) => {
          updateWeatherInfo(data);
        }
      );
      Client.postData("http://localhost:3030/getlocationimage", { q }).then(
        (data) => {
          updateLocationImage(data);
        }
      );
    } else {
      Client.postData("http://localhost:3030/getweather", { q }).then(
        (data) => {
          updateWeatherInfo(data);
        }
      );
      Client.postData("http://localhost:3030/getlocationimage", { q }).then(
        (data) => {
          updateLocationImage(data);
        }
      );
    }
  }
}
