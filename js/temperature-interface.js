// var apiKey = require('./../.env').apiKey;
var Temperature = require('../js/temperature.js').Temperature;
$(document).ready(function() {
    var tempObj =new Temperature();
  $(".showTempcelsius").hide();
  $(".showTempFahrenheit").hide();
  $("#fahrenheitHide").hide();
  $("#celsiusHide").hide();

  $('#temperatureButton').click(function() {

    $(".showTempcelsius").show();
    $(".showTempFahrenheit").hide();
    $("#fahrenheitHide").show();
    $("#celsiusHide").show();
    var city = $('#location').val();
    $('#location').val("");
    var temperature = tempObj.getTemperature(city, displayTemp);
    // var temperature = response.main.temp;
    // var temperatureC = tempObj.convertCelsius(temperature);
    // var temperatureF = tempObj.convertFahrenheit(temperature);
    // console.log(temperature);
    //
    // $('.showTempKelvin').text("The temperature in " + city + " is " + temperature + " degrees Kelvin!\n");
    // $('.showTempcelsius').text("\nThe temperature in " + city + " is " + temperatureC + " degrees celsius!\n");
    // $('.showTempFahrenheit').text("The temperature in " + city + " is " + temperatureF + " degrees Fahrenheit!");

    // $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    //   var celsius = temp.convertCelsius(response);
    //   var fahrenheit = temp.convertFahrenheit(response);
    //
    //   $('.showTempKelvin').text("The temperature in " + city + " is " + response.main.temp + " degrees Kelvin!\n");
    //   $('.showTempcelsius').text("\nThe temperature in " + city + " is " + celsius + " degrees celsius!\n");
    //   $('.showTempFahrenheit').text("The temperature in " + city + " is " + fahrenheit + " degrees Fahrenheit!");
    //
    //   console.log(JSON.stringify(response));
    // }).fail(function(error) {
    //   $('.showTemp').text(error.responseJSON.message);
    // });
  });

  var displayTemp = function(city, tempData) {
    var temperatureC = tempObj.convertCelsius(tempData);
    var temperatureF = tempObj.convertFahrenheit(tempData);
  $('.showTempKelvin').text("The temp in " + city + " is " + tempData + "%");
  $('.showTempcelsius').text("\nThe temperature in " + city + " is " + temperatureC + " degrees celsius!\n");
  $('.showTempFahrenheit').text("The temperature in " + city + " is " + temperatureF + " degrees Fahrenheit!");
}

  $('#celsiusHide').click(function(){
    $(".showTempcelsius").hide();
    $(".showTempFahrenheit").show();
    // $("#fahrenheitHide").show();
    // $("#celsiusHide").hide();
  });

  $('#fahrenheitHide').click(function() {
    $(".showTempcelsius").show();
    $(".showTempFahrenheit").hide();
    // $("#fahrenheitHide").hide();
    // $("#celsiusHide").show();
  });


// if($('#celsiusHide').click()){
//   $(".showTempcelsius").hide();
//   $(".showTempFahrenheit").show();
//
// }else if ($('#fahrenheitHide').click()) {
//   $(".showTempcelsius").show();
//   $(".showTempFahrenheit").hide();
// }
  // $('#celsiusHide').click(function() {
  //   $(".showTempcelsius").toggle();
  // });

});
