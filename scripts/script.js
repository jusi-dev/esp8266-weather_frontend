let tempHTML = document.getElementById("temp");
let humidityHTML = document.getElementById("hum");
let barHTML = document.getElementById("bar");
let gasHTML = document.getElementById("gas");
let lastUpdateHTML = document.getElementById("last");

let tempHTML2 = document.getElementById("temp2");
let humidityHTML2 = document.getElementById("hum2");
let barHTML2 = document.getElementById("bar2");
let gasHTML2 = document.getElementById("gas2");
let lastUpdateHTML2 = document.getElementById("last2");

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
        weatherData = data
        gotData = true
        temp = weatherData["temp"]
        humidity = weatherData["humidity"]
        bar = weatherData["bar"]
        gas = weatherData["gas"]
        updated = weatherData["updated"]
        tempHTML.innerHTML = `${temp} Grad`;
        humidityHTML.innerHTML = `${humidity}%`;
        barHTML.innerHTML = `${bar} Pa`;
        gasHTML.innerHTML = `${gas}%`;
        lastUpdateHTML.innerHTML = `${updated}`;
      })
      .catch((err) => {
        console.log(err)
        temp = "NULL"
        humidity = "NULL"
        bar = "NULL"
        gas = "NULL"
        updated = "NULL"
        tempHTML.innerHTML = `${temp} Grad`;
        humidityHTML.innerHTML = `${humidity}%`;
        barHTML.innerHTML = `${bar} Pa`;
        gasHTML.innerHTML = `${gas}%`;
        lastUpdateHTML.innerHTML = `${updated}`;
      })

    fetch("https://weather-backend-3hcx.onrender.com/api/weatherLoc2")
      .then(response => response.json())
      .then((data) => {
        weatherData2 = data
        gotData = true
        temp2 = weatherData2["temp"]
        humidity2 = weatherData2["humidity"]
        bar2 = weatherData2["bar"]
        gas2 = weatherData2["gas"]
        updated2 = weatherData2["updated"]
        tempHTML2.innerHTML = `${temp} Grad`;
        humidityHTML2.innerHTML = `${humidity}%`;
        barHTML2.innerHTML = `${bar} Pa`;
        gasHTML2.innerHTML = `${gas}%`;
        lastUpdateHTML2.innerHTML = `${updated}`;
      })
      .catch((err) => {
        console.log(err)
        temp2 = "NULL"
        humidity2 = "NULL"
        bar2 = "NULL"
        gas2 = "NULL"
        updated2 = "NULL"
        tempHTML2.innerHTML = `${temp} Grad`;
        humidityHTML2.innerHTML = `${humidity}%`;
        barHTML2.innerHTML = `${bar} Pa`;
        gasHTML2.innerHTML = `${gas}%`;
        lastUpdateHTML2.innerHTML = `${updated}`;
      })
}