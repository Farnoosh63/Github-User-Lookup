var apiKey = require('./../.env').apiKey;
$(document).ready(function() {
  $('#humidityButton').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      console.log(JSON.stringify(response));
    }).fail(function(error) {
      $('.showTemp').text(error.responseJSON.message);
    });
  });
});
