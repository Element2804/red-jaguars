var apiKey = "73a834198322a3a581f67121b59ad6be"; 
var searchBtn = document.querySelector("#srch");
var wthrBox = document.querySelector("#weather-box");
var srchCity = document.querySelector("#city");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humid = document.querySelector("#humid");
var wthrMain = document.querySelector("#main-weather");




function currentWeather(){
    var inputURL = "https://api.openweathermap.org/geo/1.0/direct?q="+ srchCity.value +"&limit=1&appid="+ apiKey;
    fetch(inputURL)
    .then(function(response){
        return response.json();      
    })
    .then(function (info){
       // console.log(info)
        wthrBox.textContent = info[0].name
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
          // console.log(data);
           
             var fiveUrl = "https://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ lon +"&appid="+ apiKey;

           fetch(fiveUrl)
           .then (function (response){
                return response.json();
           })
           .then (function (details){
            console.log(details.list)

            const fiveDay = details.list.filter(forecast => {
              return forecast.dt_txt.includes("12:00:00")
            })

            console.log(fiveDay)

            for (var i = 0; i < fiveDay.length; i++){
              var time = document.createElement("h3");
              time.textContent = fiveDay[i].dt_txt;
              wthrMain.appendChild(time);
            }

            
            var castCard = document.createElement("div");
            castCard.classList.add("card","teal")
            wthrMain.appendChild(castCard);
            castCard.textContent = "test";






           })
           

         });

    });
   
 

 
};

searchBtn.addEventListener("click", currentWeather);