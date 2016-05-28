var apiKey = require('./../.env').apiKey;
// var parse = require('parse-link-header');


exports.Repo = function() {};

exports.Repo.prototype.getRepo =function(userName, displayFunction){
  var accessToken;
  if(apiKey){
    accessToken = 'https://api.github.com/users/' + userName +'?access_token='+ apiKey;
  } else{
    accessToken = "https://api.github.com/users/" + userName;
  }
  $.get(accessToken).then(function(response){
    displayFunction(userName, response.login, response.name,response.avatar_url, response.repos_url);

  }).fail(function(error){
    $('.showUserName').text(error.responseJSON.message);
  });

};
exports.Repo.prototype.getAllRepo = function(userName, displayFunction){
  $.get('https://api.github.com/users/'+ userName+ '/repos').then(function(repos_url){
    for(var i = 0; i<repos_url.length; i++){
    $('.showRepo').append("<br><strong>reposiroty #"+(i+1) + "</strong> is " + repos_url[i].name + " And <em>description is: "+ repos_url[i].description +"</em>");
  }
    }).fail(function(error) {
      $('.showRepo').text(error.responseJSON.message);
    });

};
