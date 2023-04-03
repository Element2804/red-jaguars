var apiKey = "73a834198322a3a581f67121b59ad6be"; 
var searchBtn = document.querySelector("#srch");
var wthrBox = document.querySelector("#weather-box");
var srchCity = document.querySelector("#city");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humid = document.querySelector("#humid");




function currentWeather(){
    var inputURL = "http://api.openweathermap.org/geo/1.0/direct?q="+ srchCity.value +"&limit=1&appid="+ apiKey;
    fetch(inputURL)
    .then(function(back){
        return back.json();      
    })
    .then(function (info){
        console.log(info)
        wthrBox.textContent = info[0].state
         var lat = info[0].lat
         var lon = info[0].lon

         var apiURL = "https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ lon +"&units=imperial&appid=" + apiKey;

         fetch(apiURL)
         .then(function (response){
             return response.json();
         })
         .then (function (data){
            temp.textContent = data.main.temp+ " °F";
            wind.textContent = data.wind.speed+ " MPH";
            humid.textContent = data.main.humidity+ " %";
           console.log(data);
           
         });

    });
   
 

 
};

searchBtn.addEventListener("click", currentWeather);