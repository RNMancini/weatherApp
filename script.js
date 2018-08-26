const loc = document.getElementById("location");
const temNum = document.getElementById("temperature-num");
const temScale = document.getElementById("weather-condition");
const weatherCondit =document.getElementById("weather-icon");

$function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      getWeather (position.coords.latitude, position.coords.longitude);
      });
      } else {
        loc.innerHTML = "Geolocation is having an error.";
        }
        }
        
    //get weather api
    function getWeath(lat, long) {
    get const root = "https://fcc-weather-api.glitch.me/api/current";
fetch('${root}lat=${lat}&{long}', { method: "get" })    
.then(resp => resp.json())
.then(data => {
  updateDataToUI(data.namae, data.weather, data.main.temp);
  .catch(function(err) {
    console.error(err);
    });
    }
    
  
  function updateDOM(location, weather, temp) {
weatherIcon.innerHTML = '<img src="${weather[0].icon}"/>';
weatherCon.innerHTML = weather[0].main;
loc.innerHTML = location;
tempNum.inner.html = '${temp}';
}

window.onload = function() {
  getLocation();
};

function cToF(celsius) {
  return celsius * 9/5 + 32;
}
  function fToC(fahrenheit)
  { return (fahrenheit - 32) * 5/9;
  }
  function toggleScale() {
    if (tempScale.innerHTML === "C") {
     tempNum.innerHTML = cToF(tempNum.innerHTML).toFixed(2); 
tempScale.innerHTML = "C";    }
  }
  
tempScale.addEventListener("click", toggleScale);

