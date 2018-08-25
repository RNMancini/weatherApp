$(document).ready(function() {
  function weather() {
    navigator.geolocation.getCurrentPosition(success, error);
    
    function success(pos) {
      var lat = pos.coords.latitude;
      var long = pos.coords.longitude;
    }
    function error() { console.log('error');}
    function weather(lat, long) {
    var URL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}';
    $.getJSON(URL, function(data){ console.log(data);
 updateDOM();     
    });
  }
  
  
  function updateDOM() {
  
    var city = data.name;
   var temp = Math.round(data.main.temp); 
   var desc = data.weather[0].description;
    $('#city').html(city);
  $('#temp').html(temp);
    $('#desc').html(desc);
    $('#icon').attr('src', icon);
    
  }
  
});