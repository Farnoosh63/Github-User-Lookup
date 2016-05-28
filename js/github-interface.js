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
    });
  });
});

var displayUserName = function(userName, UserNameData, fullNameData,avatarData, RepoData) {
  $('.showUserName').text("Username:" + UserNameData );
  $('.showFullName').text("Full name:" + fullNameData );
  $('.showImage').append("<img src='"+avatarData+"'>" );

};

var displayDescription = function(userName,number,repoName, time, descriptionData, htmlData) {
  $('.showRepo').append("<br><strong>reposiroty #"+number+"</strong> is "+repoName +" created at: "+ time + ", And <em>description is: "+ descriptionData +"</em>"+"<a href='" + htmlData+ "'"+">"+ " link to "+repoName);
};
