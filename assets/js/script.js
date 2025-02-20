
/**
* Name: Eloy Gonzalez
* Date: 03/30/2021
* Description:

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL.
 Developers are often tasked with retrieving data from another application's API and using it in
 the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.
*/

/**Decalared Variables
 * I used the document method querySelector() user moment to get data. Add variables and set array and local variable
 */



var searchFormEl = $('#search-form');
var searchCityEl = $('#search-city');
var todayContainerEl = $('#today-container');
var fiveDayEl = $('#five-day-container');
var weatherSearch = []; // Results will go here
var  storedWeatherSearchHistory = JSON.parse(localStorage.getItem("weatherSearchHistory"));
var liHistorycount = 0;
$('#main-container').hide();
//if array is empty after checking for local storage if empty create data for array for history search.
if (weatherSearch  == null || weatherSearch.length === 0) {
  var retrievedData = localStorage.getItem("storedWeatherSearchHistory");
  if (retrievedData == null)
  {

  } 
  else 
  {
    weatherSearch = JSON.parse(retrievedData);
    for (var i = 0; i < weatherSearch.length; i++)
    {
      $(".list-group").append('<li id = "history-city' + liHistorycount + '" class="list-group-item ">' +  weatherSearch[i] +'</li>'); 
      var lihistname = "history-city" + liHistorycount + "";
      var clickli = document.getElementById("history-city" + liHistorycount);
      clickli.addEventListener("click", function (event) {
        // used jquery as requested
        findweather(this.textContent);
  
        });
        liHistorycount++;
    }
  }
} 
else 
{

}
//Declared Function
//go to wheather APi get data that has been for new search city or form click of history.
function findweather(cityLocation)
{
  var apiKey = "19b818be73dc1ae04217d6a6cfb8c6db"
  var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityLocation +'&units=imperial&appid=' + apiKey + ''; 
  searchCity = cityLocation;
  fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
   console.log(data.weather[0]);
    $('#main-container').show();
    $('#city').empty();
    $('#temp-today').empty();
    $('#temp-humidity').empty();
    $('#temp-wind').empty();
    $('#city').append('<img id="wiconmain" src="theImg.png" />')
    $('#city').append(data.name + " ("  + moment().format("MM/DD/YYYY") + ") ");
    $("#wiconmain").attr("src", " http://openweathermap.org/img/w/"+ data.weather[0].icon +".png");
    $('#temp-today').append("Tempature: " + data.main.temp + "°F");
    $('#temp-humidity').append("Humidity: " + data.main.humidity+ "%");
    $('#temp-wind').append("Wind Speed: " + data.wind.speed + " MPH");
    allapi(data.coord.lon,data.coord.lat);

    console.log( weatherSearch)
    localStorage.removeItem("storedWeatherSearchHistory");
    localStorage.setItem("storedWeatherSearchHistory", JSON.stringify(weatherSearch));
    $('.list-group').empty();
    for (var i = 0; i < weatherSearch.length; i++)
    {
      $(".list-group").append('<li id = "history-city' + liHistorycount + '" class="list-group-item ">' + weatherSearch[i] +'</li>'); 
      var lihistname = "history-city" + liHistorycount + "";
      var clickli = document.getElementById("history-city" + liHistorycount);
      clickli.addEventListener("click", function (event) {
        findweather(this.textContent);
  
        });
        liHistorycount++;
    }

  });

}

//go to wheather APi get additional data that has been for new search city or form click of history.
function allapi(lon,lat)
{ 
    https://api.openweathermap.org/data/2.5/onecall?lat=25.7743&lon=-80.1937&exclude=hourly,daily&units=imperial&appid=19b818be73dc1ae04217d6a6cfb8c6db
    var apiKey = "19b818be73dc1ae04217d6a6cfb8c6db"
    var queryURL = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ lat +'&lon=' +lon + '&units=imperial&appid=' + apiKey + ''; 
    moment().subtract(10, 'days').calendar();
    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.daily[0]);
      $('#temp-UV').empty();
      $('#temp-UV').append("UV Index: " + data.current.uvi);
      if( data.current.uvi < 2 )
      {
        $('#temp-UV').css("background-color", "green");
      }
      else if( data.current.uvi > 2 &&  data.current.uvi <= 5 )
      {
        $('#temp-UV').css("background-color", "yellow");

      }
      else if( data.current.uvi > 5 &&  data.current.uvi <= 7 )
      {
        $('#temp-UV').css("background-color", "orange");

      }
      else if( data.current.uvi > 7 &&  data.current.uvi <= 10 )
      {
        $('#temp-UV').css("background-color", "red");

      }
      else if( data.current.uvi > 7 &&  data.current.uvi < 11 )
      {
        $('#temp-UV').css("background-color", "purple");

      }
       //5 day for cast
      //Used moments and requested
      //Day 1
      $('#day1-temp').empty();
      $('#day1-humidity').empty();
      $('#day1-date').empty();
      $('#day1-date').append( moment().add(1, 'days').format("MM/DD/YYYY"));
      $("#wicon1").attr("src", " http://openweathermap.org/img/w/"+ data.daily[0].weather[0].icon +".png");
      $('#day1-temp').append("Temp: " + data.daily[0].temp.day + "°F");
      $('#day1-humidity').append("Humidity: " + data.daily[0].humidity + "%");

      //Day 2
      $('#day2-temp').empty();
      $('#day2-humidity').empty();
      $('#day2-date').empty();
      $('#day2-date').append( moment().add(2, 'days').format("MM/DD/YYYY"));
      $("#wicon2").attr("src", " http://openweathermap.org/img/w/"+ data.daily[1].weather[0].icon +".png");
      $('#day2-temp').append("Temp: " + data.daily[1].temp.day + "°F");
      $('#day2-humidity').append("Humidity: " + data.daily[1].humidity + "%");
     
      //Day 3
      $('#day3-temp').empty();
      $('#day3-humidity').empty();
      $('#day3-date').empty();
      $('#day3-date').append( moment().add(3, 'days').format("MM/DD/YYYY"));
      $("#wicon3").attr("src", " http://openweathermap.org/img/w/"+ data.daily[2].weather[0].icon +".png");
      $('#day3-temp').append("Temp: " + data.daily[2].temp.day + "°F");
      $('#day3-humidity').append("Humidity: " + data.daily[2].humidity + "%");

      //Day 4
      $('#day4-temp').empty();
      $('#day4-humidity').empty();
      $('#day4-date').empty();
      $('#day4-date').append( moment().add(4, 'days').format("MM/DD/YYYY"));
      $("#wicon4").attr("src", " http://openweathermap.org/img/w/"+ data.daily[3].weather[0].icon +".png");
      $('#day4-temp').append("Temp: " + data.daily[3].temp.day + "°F");
      $('#day4-humidity').append("Humidity: " + data.daily[3].humidity + "%");
        
      //Day 5
      $('#day5-temp').empty();
      $('#day5-humidity').empty();
      $('#day5-date').empty();
      $('#day5-date').append( moment().add(5, 'days').format("MM/DD/YYYY"));
      $("#wicon5").attr("src", " http://openweathermap.org/img/w/"+ data.daily[4].weather[0].icon +".png");
      $('#day5-temp').append("Temp: " + data.daily[4].temp.day + "°F");
      $('#day5-humidity').append("Humidity: " + data.daily[4].humidity + "%");
        
    });
}

//on click events
//click on search button
searchFormEl.on("submit", function(event)
{
  event.preventDefault(); 
  searchCity = searchCityEl.val();
  weatherSearch.push(searchCity);
  findweather(searchCity);
});
