const cityInput = document.querySelector("#input-city");
const searchBtn = document.querySelector(".search")


async function getWeatherData(location) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${location}&lang=de`,
        {
            mode: 'cors'
        }
    );
    if (!response.ok) {
        throwErrorMsg();
    }
    const weatherData = await response.json();
    const newData = processData(weatherData);
    setSearchResult(newData);
}

function throwErrorMsg() {
    console.log("error")
}

function setSearchResult(weatherData) {
    if (!weatherData) return;

    const weather = document.querySelector(".weather");
    const city = document.querySelector(".city")
    const celsius = document.querySelector(".celsius")
    const feelsLike = document.querySelector(".feelsLike");
    const wind = document.querySelector(".wind");
    const humidity = document.querySelector(".humidity");

    city.textContent = `${weatherData.location}, ${weatherData.region}`
    weather.textContent = `${weatherData.condition}`
    celsius.textContent = `${weatherData.currentTemp}°C`
    feelsLike.textContent = `Gefühlt: ${weatherData.feelslike} °C`
    wind.textContent = `Wind: ${weatherData.wind} km/h`
    humidity.textContent = `Luftfeuchtigkeit: ${weatherData.humidity}%`
}

function processData(weatherData) {
    const data = {
        condition: weatherData.current.condition.text,
        feelslike: Math.round(weatherData.current.feelslike_c),
        currentTemp: Math.round(weatherData.current.temp_c),
        wind: weatherData.current.wind_kph,
        humidity: weatherData.current.humidity,
        location: weatherData.location.name,
        region: weatherData.location.region,
    }
    return data;
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (cityInput.value == "") return;
    getWeatherData(cityInput.value);
})