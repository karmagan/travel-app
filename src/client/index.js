import { submitHandler } from "./js/handlers";
import { getWeatherInfo } from "./js/get-data";
import { postData } from "./js/post-data";
import { listeners } from "./js/listeners";
import "./styles/base.scss";

export { listeners, submitHandler, getWeatherInfo, postData };

listeners()