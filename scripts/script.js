let tempHTML = document.getElementById("temp");
let humidityHTML = document.getElementById("hum");
let barHTML = document.getElementById("bar");
let gasHTML = document.getElementById("gas");
let lastUpdateHTML = document.getElementById("last");

window.addEventListener("load", (event) => {
    console.log("Site is ready");
    getWeatherData();
  });

async function getWeatherData () {
    let temp;
    let humidity;
    let bar;
    let gas;
    let gotData = false;

    fetch("https://weather-backend-3hcx.onrender.com/api/weatherLoc1")
      .then(response => response.json())
      .then((data) => {
        let weatherData = data
        const date = new Date();
        const timeHour = date.getHours();
        const timeMinutes = date.getMinutes();
        gotData = true
        temp = weatherData["temp"]
        humidity = weatherData["humidity"]
        bar = weatherData["bar"]
        gas =weatherData["gas"]
        tempHTML.innerHTML = `${temp} Grad`;
        humidityHTML.innerHTML = `${humidity}%`;
        barHTML.innerHTML = `${bar} Pa`;
        gasHTML.innerHTML = `${gas}%`;
        lastUpdateHTML.innerHTML = `${timeHour}:${timeMinutes}`;
      })
      .catch((err) => {
        console.log(err)
        temp = "NULL"
        humidity = "NULL"
        bar = "NULL"
        gas = "NULL"
      })
}