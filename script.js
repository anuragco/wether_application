const accesskey = "f4ab892f24ea3904b9c9965e4fa93a95";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search-input input");
const searchbtn = document.querySelector(".search-input button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl + city +`&appid=${accesskey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "./assets/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "./assets/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "./assets/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "./assets/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "./assets/mist.png";
    }
}

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})

