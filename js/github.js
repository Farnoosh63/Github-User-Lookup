var apiKey = require('./../.env').apiKey;
exports.Temperature = function() {

};

exports.Temperature.prototype.getTemperature = function(city,displayFunction){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    // var celsius = temp.convertCelsius(response);
    // var fahrenheit = temp.convertFahrenheit(response);

    // $('.showTempKelvin').text("The temperature in " + city + " is " + response.main.temp + " degrees Kelvin!\n");
    // $('.showTempcelsius').text("\nThe temperature in " + city + " is " + celsius + " degrees celsius!\n");
    // $('.showTempFahrenheit').text("The temperature in " + city + " is " + fahrenheit + " degrees Fahrenheit!");
    // return response.main.temp;
    displayFunction(city, response.main.temp);
    console.log(JSON.stringify(response));
  }).fail(function(error) {
    $('.showTemp').text(error.responseJSON.message);
  });
}

exports.Temperature.prototype.convertCelsius = function(kelvin) {
  var celsius = Math.round(kelvin- 273.15);
  return celsius;
};

exports.Temperature.prototype.convertFahrenheit = function(kelvin) {
  var fahrenheit = Math.round((kelvin*9 / 5) - 459.67);
  return fahrenheit;
};
