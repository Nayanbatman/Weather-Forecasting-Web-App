const inputbox = document.querySelector(".input-box");
const btn = document.querySelector('button');
const img = document.querySelector('.weather-img');
const temperature = document.querySelector(".temp");
const descp = document.querySelector(".descp");
const humid = document.querySelector("#humid");
const speed = document.querySelector("#speed");
const location_not_found = document.querySelector(".location-not-found");
const humidity = document.querySelector(".humidity");
const wind_speed = document.querySelector(".wind-speed");
const weather_body = document.querySelector(".weather-body");

async function checkWeather(city){
const api_key = '99fdf66cbbe501a5639361d8270aa4d2';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

const weather_data = await fetch(`${url}`).then(response => response.json());

if(weather_data.cod === '404'){
    location_not_found.style.display = "flex";
    weather_body.style.display ="none";
    return;
}

else{
location_not_found.style.display = "none";
weather_body.style.display = "flex";
temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}<sup>°C</sup>`;
humid.innerHTML = `${weather_data.main.humidity}%`
speed.innerHTML = `${weather_data.wind.speed}Km/h`
descp.innerHTML = `${weather_data.weather[0].description}`

switch(weather_data.weather[0].main){
    case 'Clouds':
        img.src = "/assets/cloud.png";
        break;
    case 'Clear':
        img.src = "/assets/clear.png";
        break;
    case 'Mist':
        img.src = "/assets/mist.png";
        break;      
    case 'Rain':
        img.src = "/assets/rain.png";
        break;
    case 'Snow':
        img.src = "/assets/snow.png";
        break;           
}
}
}

btn.addEventListener("click",function(){
checkWeather(inputbox.value);
});