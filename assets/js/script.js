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


var searchFormEl = document.querySelector('#search-form');
var searchCityEl = document.querySelector('#search-city');
var todayContainerEl = document.querySelector('#today-container');
var fiveDayEl = document.querySelector('#five-day-container');


searchFormEl.on("submit", function(event)
{
    event.preventDefault();
    var searchCity = searchCityEl.val();
    console.log(searchCity);
    var apiKey = "19b818be73dc1ae04217d6a6cfb8c6db"
    var apiUrl = "http://api.openweathermap.org/data/2.5/forecast?q= " +
    searchCity + "&appid=" + apiKey + " ";

});

