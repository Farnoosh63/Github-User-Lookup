var Repo = require('../js/github.js').Repo;

$(document).ready(function() {
  var repoObject =new Repo();
  $('#submit').click(function(event) {
    $("#solution").show();
    event.preventDefault();
    var userName = $('#userName').val();
    $('#userName').val("");
    repoObject.getRepo(userName,displayUserName);
    repoObject.getAllRepo(userName, displayDescription);
    //refresh the page when the user want to look for another userName
    $('#userName').click(function() {
       window.location.reload();
      //  alert("reloading...");
     });
  });
});

var displayUserName = function(userName, UserNameData, fullNameData, RepoData) {
  $('.showUserName').text("Username:" + UserNameData );
  $('.showFullName').text("Full name:" + fullNameData );

};

var displayDescription = function(userName, descriptionData) {
    $('.showDescription').text("description: " + descriptionData );
};
