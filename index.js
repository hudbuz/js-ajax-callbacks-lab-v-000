function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#results").html())
}

$(document).ready(function (){
  handlebarsSetup()
});



function searchRepositories(e) {
  var term = $('#searchTerms').val()
  var api_url = "https://api.github.com/search/repositories?q="
  var full_api = api_url + "?utf8=✓&q=" term

  $.get(full_api, function(data) {

    debugger
    $.each(data['items'], function(index, repo){
      $('#results').html(repo["full_name"])
      $('#results').html(repo["description"])
      $('#results').html("<a href=" + repo["html_url"] + ">")
      $('#results').html(repo["owner"]["login"])
      $('#results').html(repo["owner"]["avatar_url"])
      $('#results').html("<a href=" + repo["owner"]["html_url"] + ">")
      event.preventDefault()

    })
  
})
}


function clickSearch() {
  $('#search').on('click', function(event){
    searchRepositories();
  } )
}

function showCommits() {



}


$(document).ready(function (){
  
 searchRepositories()
 clickSearch()
  showCommits();
});