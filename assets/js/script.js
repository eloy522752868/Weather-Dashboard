//alert("HellowWrold")


//window.onload = function() {
    //if ('undefined' == typeof window.jQuery) { 
        // jQuery is loaded  
        //alert("Doesn't Work");
   // } else {
        // jQuery is not loaded
      
     //   alert("Yeah!");
  //  }
//}

var searchFormEl = $('#search-form');
var searchCityEl = $('#search-city');
var todayContainerEl = $('#today-container');
var fiveDayEl = $('#five-day-container');
$('#main-container').hide();



searchFormEl.on("submit", function(event)
{
    event.preventDefault(); 
    var searchCity = searchCityEl.val();
    var apiKey = "19b818be73dc1ae04217d6a6cfb8c6db"
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchCity +'&units=imperial&appid=' + apiKey + ''; 

    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $('#main-container').show();
     // $("#todayContainerEl").show( );
      $('#city').empty();
      $('#temp-today').empty();
      $('#temp-temp-humidity').empty();
      $('#temp-wind').empty();
      $('#city').append(data.name);
      $('#temp-today').append("Tempature: " + data.main.temp + "°F");
      $('#temp-humidity').append("Humidity: " + data.main.humidity+ "%");
      $('#temp-wind').append("Wind Speed: " + data.wind.speed + " MPH");


      
      console.log(data.coord.lon);
      allapi(data.coord.lon,data.coord.lat);
      //imagesDisplay.empty();
     // http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key}
     // for (var i = 0; i < data.data.length; i++) {
        //var imageEl = $("<img>");
        //imageEl.addClass("col-sm-4");
        //imageEl.attr("src", data.data[i].images.fixed_width_small.url);
        //imagesDisplay.append(imageEl);
//}
    });
  // convert the response from JSON
  // Start by console logging the data.
});


function allapi(lon,lat)
{ 

    https://api.openweathermap.org/data/2.5/onecall?lat=25.7743&lon=-80.1937&exclude=hourly,daily&units=imperial&appid=19b818be73dc1ae04217d6a6cfb8c6db

    var apiKey = "19b818be73dc1ae04217d6a6cfb8c6db"
    var queryURL = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ lat +'&lon=' +lon + '&units=imperial&appid=' + apiKey + ''; 

    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $('#temp-UV').empty();
      $('#temp-UV').append("UV Index: " + data.current.uvi);

         //5 day for cast
      //Day 1
      $('#day1-temp').empty();
      $('#day1-humidity').empty();
      $('#day1-temp').append("Temp: " + data.daily[0].temp.day + "°F");
      $('#day1-humidity').append("Humidity: " + data.daily[0].humidity + "%");

      //Day 2
      $('#day2-temp').empty();
      $('#day2-humidity').empty();
      $('#day2-temp').append("Temp: " + data.daily[1].temp.day + "°F");
      $('#day2-humidity').append("Humidity: " + data.daily[1].humidity + "%");

      //Day 3
      $('#day3-temp').empty();
      $('#day3-humidity').empty();
      $('#day3-temp').append("Temp: " + data.daily[2].temp.day + "°F");
      $('#day3-humidity').append("Humidity: " + data.daily[2].humidity + "%");

      //Day 4
      $('#day4-temp').empty();
      $('#day4-humidity').empty();
      $('#day4-temp').append("Temp: " + data.daily[3].temp.day + "°F");
      $('#day4-humidity').append("Humidity: " + data.daily[3].humidity + "%");
        
      //Day 5
      $('#day5-temp').empty();
      $('#day5-humidity').empty();
      $('#day5-temp').append("Temp: " + data.daily[4].temp.day + "°F");
      $('#day5-humidity').append("Humidity: " + data.daily[4].humidity + "%");
        
    });
}