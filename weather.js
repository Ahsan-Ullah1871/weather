let apiLink = "http://api.openweathermap.org/data/2.5/weather";
let apiKey = 'd615e9df6db970486f02a6c42431f0d8';


let link =  city => {
   
    let url = `${apiLink}?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
		.then((response) => response.json())
        .then((data) => {
            document.getElementById("weather-status").style.display = "block";
            document.getElementById('cityName').innerText = data.name;
            document.getElementById("temp").innerText =
			data.main.feels_like;
            document.getElementById("clouds").innerText =
			data.clouds.all;
            document.getElementById("wind").innerText =
			data.wind.speed;
            document.getElementById("weather").innerText =
			data.weather[0].description;

   
 		});
     
}



 let ClickSearch = ()  => {

    const citySearch = document.getElementById("Search-city").value;
    
    document.getElementById(" header-text ").style.display = "none";
    link(citySearch);
    
}