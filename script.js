// insert api key from .gitignore file

const apiKey = API_KEY; // take api key from .config.js file and paste here
const apiUrl =  API_URL; // take api url from .config.js file and paste here

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
        const response = await fetch(apiUrl + city  + `&appid=${apiKey}`);

        if(response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{
                 var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".condition").innerHTML = data.weather[0].main;

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.png";
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        
    } 
        }

       


searchButton.addEventListener("click", () => {
   checkWeather(searchBox.value);
});
