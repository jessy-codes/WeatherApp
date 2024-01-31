const APIKey= "0b2b196fc313d73ba7a21ce371e6370a";
const API_URL ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q= ";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city){
    const response =await fetch(API_URL + city + `&appid=${APIKey}`);
    
    if(response.status===404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }
    else{
        var data = await response.json();

        let City = document.querySelector(".city");
        let Temp = document.querySelector(".temp");
        let Hum = document.querySelector(".humidity");
        let Wind = document.querySelector(".wind");
    
        City.innerHTML= data.name;
        Temp.innerHTML= Math.round(data.main.temp) + "°c";
        Hum.innerHTML=  data.main.humidity + "%";
        Wind.innerHTML= data.wind.speed + "km/h"; 
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Assets/images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "Assets/images/clear.png" ;
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "Assets/images/drizzle.png" ;
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "Assets/images/rain.png" ;
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "Assets/images/mist.png" ;
        }
    
        document.querySelector(".weather").style.display ="block"; 
        document.querySelector(".error").style.display ="none";
    }
        
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
 })
