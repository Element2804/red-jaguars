var apiKey = "73a834198322a3a581f67121b59ad6be"; 
var searchBtn = document.querySelector("#srch");
var wthrBox = document.querySelector("#weather-box");
var apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=28.538336&lon=-81.379234&appid=73a834198322a3a581f67121b59ad6be";


searchBtn.addEventListener("click", testFunc)

function testFunc(){
    fetch(apiURL)
    .then(function (response){
        return response.json();
    })
    .then (function (data){
        console.log(data);
        //wthrBox.textContent = data;
    })

 
}