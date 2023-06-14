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
    let gotData = false;

    fetch("https://weather-backend-3hcx.onrender.com/api/weatherLoc1")
      .then(response => response.json())
      .then((data) => {
        let weatherData = data;
        gotData = true
        let temp = weatherData["temp"]
        let humidity = weatherData["humidity"]
        let bar = weatherData["bar"]
        let gas = weatherData["gas"]
        let updated = weatherData["updated"]
        tempHTML.innerHTML = `${temp} Grad`;
        humidityHTML.innerHTML = `${humidity}%`;
        barHTML.innerHTML = `${bar} hPa`;
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
        barHTML.innerHTML = `${bar} hPa`;
        gasHTML.innerHTML = `${gas}%`;
        lastUpdateHTML.innerHTML = `${updated}`;
      })

    fetch("https://weather-backend-3hcx.onrender.com/api/weatherLoc2")
      .then(response => response.json())
      .then((data) => {
        let weatherData2 = data;
        gotData = true
        let temp2 = weatherData2["temp"]
        let humidity2 = weatherData2["humidity"]
        let bar2 = weatherData2["bar"]
        let gas2 = weatherData2["gas"]
        let updated2 = weatherData2["updated"]
        tempHTML2.innerHTML = `${temp2} Grad`;
        humidityHTML2.innerHTML = `${humidity2}%`;
        barHTML2.innerHTML = `${bar2} hPa`;
        gasHTML2.innerHTML = `${gas2}%`;
        lastUpdateHTML2.innerHTML = `${updated2}`;
      })
      .catch((err) => {
        console.log(err)
        temp2 = "NULL"
        humidity2 = "NULL"
        bar2 = "NULL"
        gas2 = "NULL"
        updated2 = "NULL"
        tempHTML2.innerHTML = `${temp2} Grad`;
        humidityHTML2.innerHTML = `${humidity2}%`;
        barHTML2.innerHTML = `${bar2} hPa`;
        gasHTML2.innerHTML = `${gas2}%`;
        lastUpdateHTML2.innerHTML = `${updated2}`;
      })
}