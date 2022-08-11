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
    const feelsLike = document.querySelector(".feelslike-data");
    const wind = document.querySelector(".wind-data");
    const humidity = document.querySelector(".humidity-data");
    const day = document.querySelector(".day");
    const time = document.querySelector(".time");

    city.textContent = `${weatherData.location}, ${weatherData.region}`
    weather.textContent = `${weatherData.condition}`
    celsius.textContent = `${weatherData.currentTemp}°C`
    feelsLike.textContent = `${weatherData.feelslike} °C`
    wind.textContent = `${weatherData.wind} km/h`
    humidity.textContent = `${weatherData.humidity}%`
    day.textContent = `${weatherData.dayName}, ${weatherData.day}. ${weatherData.month} ${weatherData.year}`
    time.textContent = `${weatherData.hours}:${weatherData.minutes} Uhr`
}

function processData(weatherData) {
    const date = new Date(`${weatherData.location.localtime}`)
    const data = {
        condition: weatherData.current.condition.text,
        feelslike: Math.round(weatherData.current.feelslike_c),
        currentTemp: Math.round(weatherData.current.temp_c),
        wind: Math.round(weatherData.current.wind_kph),
        humidity: weatherData.current.humidity,
        location: weatherData.location.name,
        region: weatherData.location.region,
        day: date.getDate(),
        year: date.getFullYear(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
    }


    const hours = date.getHours();
    switch (hours) {
        case 0:
            data["hours"] = "00"
            break;
        case 1:
            data["hours"] = "01"
            break;
        case 2:
            data["hours"] = "02"
            break;
        case 3:
            data["hours"] = "03"
            break;
        case 4:
            data["hours"] = "04"
            break;
        case 5:
            data["hours"] = "05"
            break;
        case 6:
            data["hours"] = "06"
            break;
        case 7:
            data["hours"] = "07"
            break;
        case 8:
            data["hours"] = "08"
            break;
        case 9:
            data["hours"] = "09"
            break;
    }

    const dayName = date.getDay();
    switch (dayName) {
        case 0:
            data["dayName"] = "Sonntag"
            break;
        case 1:
            data["dayName"] = "Montag"
            break;
        case 2:
            data["dayName"] = "Dienstag"
            break;
        case 3:
            data["dayName"] = "Mittwoch"
            break;
        case 4:
            data["dayName"] = "Donnerstag"
            break;
        case 5:
            data["dayName"] = "Freitag"
            break;
        case 6:
            data["dayName"] = "Samstag"
            break;
    }
    const month = date.getMonth();

    switch (month) {
        case 0:
            data["month"] = "Januar"
            break;
        case 1:
            data["month"] = "Februar"
            break;
        case 2:
            data["month"] = "März"
            break;
        case 3:
            data["month"] = "April"
            break;
        case 4:
            data["month"] = "Mai"
            break;
        case 5:
            data["month"] = "Juni"
            break;
        case 6:
            data["month"] = "Juli"
            break;
        case 7:
            data["month"] = "August"
            break;
        case 8:
            data["month"] = "September"
            break;
        case 9:
            data["month"] = "Oktober"
            break;
        case 10:
            data["month"] = "November"
            break;
        case 11:
            data["month"] = "Dezember"
            break;
    }

    console.log(data);
    return data;
}

// function processTime(weatherData) {
//     const date = new Date(`${weatherData.location.localtime}`)
//     const day = date.getDay();
//     let dayDe;

//     switch (day) {
//         case 0:
//             dayDe = "Sonntag"
//             break;
//         case 1:
//             dayDe = "Montag"
//             break;
//         case 2:
//             dayDe = "Dienstag"
//             break;
//         case 3:
//             dayDe = "Mittwoch"
//             break;
//         case 4:
//             dayDe = "Donnerstag"
//             break;
//         case 5:
//             dayDe = "Freitag"
//             break;
//         case 6:
//             dayDe = "Samstag"
//             break;
//     }
//     return dayDe;

// }


function testfunction() {
    const date = new Date("2022-08-12 15:12")
    const day = date.getDate();
    return day;
}

console.log(testfunction())


searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (cityInput.value == "") return;
    getWeatherData(cityInput.value);
})