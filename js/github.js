var apiKey = require('./../.env').apiKey;

exports.Repo = function() {};

exports.Repo.prototype.getRepo =function(userName, displayFunction){
  var accessToken;
  if(apiKey){
    accessToken = "'https://api.github.com/users/' + userName +'?access_token='+apiKey";
  } else{
    accessToken = "https://api.github.com/users/" + userName;
  }
  $.get(accessToken).then(function(response){
    displayFunction(userName, response.login, response.name, response.repos_url);
    // displayFullName(userName, response.name);


    // var img = response.avatar_url;
    // console.log(img);

    // $('.showUserName').text("Username:" + response.login );

    //
    // $('.myCanvas').text("href=" +"'"+img+"'");

  }).fail(function(error){
    $('.showUserName').text(error.responseJSON.message);

  });

};
exports.Repo.prototype.getAllRepo = function(userName, displayFunction){
  $.get('https://api.github.com/users/'+ userName+ '/repos').then(function(repos_url){
    for(var i = 0; i<repos_url.length; i++){
    $('.showRepo').append("<br>reposiroty #"+(i+1) + " is " + repos_url[i].name + " And description is: "+ repos_url[i].description);
  }
    }).fail(function(error) {
      $('.showRepo').text(error.responseJSON.message);
    });

};
