var apiKey = "73a834198322a3a581f67121b59ad6be"; 
var searchBtn = document.querySelector("#srch");
var wthrBox = document.querySelector("#weather-box");
var srchCity = document.querySelector("#city");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humid = document.querySelector("#humid");
var wthrMain = document.querySelector("#main-weather");
var castCard = document.querySelector("#weather-card");
var forOne = document.querySelector("#forOne")




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
           
             var fiveUrl = "https://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ lon +"&units=imperial&appid="+ apiKey;

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
              
              var time = document.createElement("div");
              var fiveTemp = document.createElement("div");
              var fiveHumid = document.createElement("div");
              var fiveDesc = document.createElement("div");

            

              fiveTemp.textContent = fiveDay[i].main.temp;
              console.log(fiveDay[i].main.temp);
                            
              time.textContent = fiveDay[i].dt_txt;
              fiveTemp.textContent = "Temp- " + fiveDay[i].main.temp + "°F";
              fiveHumid.textContent = "Humidity- " + fiveDay[i].main.humidity +"%";
              fiveDesc.textContent = "Chance Of: " + fiveDay[i].weather[0].description;                       

              wthrMain.appendChild(time);
              wthrMain.appendChild(fiveHumid);             
              wthrMain.appendChild(fiveTemp);
              wthrMain.appendChild(fiveDesc);

              

            }

            
           






           })
           

         });

    });
   
 

 
};

searchBtn.addEventListener("click", currentWeather);