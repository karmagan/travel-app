import { getWeatherInfo } from "../src/client/js/handlers";

const data = {
  data: [
    {
      city_name: "london",
      temp: "temp",
      precip: "precip",
      weather: { icon: "icon", description: "description" },
    },
  ],
};

describe("Testing the getWeatherInfo", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test("Testing the getWeatherInfo() function", () => {
    // Define the input for the function, if any, in the form of variables/array
    // Define the expected output, if any, in the form of variables/array
    // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
    // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher

    expect(getWeatherInfo(data))
      .toBe(`<img style='float:right' src='https://www.weatherbit.io/static/img/icons/icon.png' alt=description />
    You chose a date within a week. Current weather for london is as follows: <br />
    Temperature: temp <br />
    Precipitation: precip<br />`);
  });
});
