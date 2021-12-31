export function getWeatherInfo(data) {
  let output = "";
  if (data.data.length > 1) {
    output += `You chose a date after one week. Weather forecast for ${data.city_name} is as follows: <br />`;
    data.data.forEach((day) => {
      output += `Date: ${day.valid_date} High: ${day.high_temp} Low: ${day.low_temp} Precipitation: ${day.precip} <br />`;
    });
  } else {
    output += `<img style='float:right' src='https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png' alt=${data.data[0].weather.description} />
      You chose a date within a week. Current weather for ${data.data[0].city_name} is as follows: <br />
      Temperature: ${data.data[0].temp} <br />
      Precipitation: ${data.data[0].precip}<br />`;
  }
  return output;
}
