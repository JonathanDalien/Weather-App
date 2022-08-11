const cityInput = document.querySelector("#input-city");
const searchBtn = document.querySelector(".search")
const img = document.querySelector(".pictest")


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
    const timeData = processTime(weatherData);
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
        date: new Date(`${weatherData.location.localtime}`)
    }
    return data;
}

function processTime(weatherData) {
    const date = new Date(`${weatherData.location.localtime}`)
    const day = date.getDay();
    let dayDe;

    switch (day) {
        case 0:
            dayDe = "Sonntag"
            break;
        case 1:
            dayDe = "Montag"
            break;
        case 2:
            dayDe = "Dienstag"
            break;
        case 3:
            dayDe = "Mittwoch"
            break;
        case 4:
            dayDe = "Donnerstag"
            break;
        case 5:
            dayDe = "Freitag"
            break;
        case 6:
            dayDe = "Samstag"
            break;

    }

}


function testfunction() {
    const date = new Date("2022-08-12 15:12")
    const day = date.getDay();
    let dayDe;

    switch (day) {
        case 0:
            dayDe = "Sonntag"
            break;
        case 1:
            dayDe = "Montag"
            break;
        case 2:
            dayDe = "Dienstag"
            break;
        case 3:
            dayDe = "Mittwoch"
            break;
        case 4:
            dayDe = "Donnerstag"
            break;
        case 5:
            dayDe = "Freitag"
            break;
        case 6:
            dayDe = "Samstag"
            break;
    }

    return dayDe;

}

console.log(testfunction())


searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (cityInput.value == "") return;
    getWeatherData(cityInput.value);
})