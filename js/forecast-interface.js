var apiKey = require('./../.env').apiKey;
$(document).ready(function() {
  $('#forecastButton').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey).then(function(response) {
for(var i = 0; i<(response.list).length; i++){
  $('.showForecast').append("<br>The forecast in " + city + " is " + response.list[i].main.temp );
}
      // $('.showForecast').text("The forecast in " + city + " is " + response.list[0].main.temp );
      console.log(JSON.stringify(response));
    }).fail(function(error) {
      $('.showForecast').text(error.responseJSON.message);
    });
  });
});
