function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#results").html())
}

$(document).ready(function (){
  handlebarsSetup()
});



function searchRepositories() {
  $(document).ready(function(event){
  $.get("https://api.github.com/search/repositories?q=" + $('#searchTerms').val(), function(data) {
    console.log(data)
    //$.each(data['items'], function(index, repo){
      //$('#results').html(repo["full_name"])
      //$('#results').html(repo["description"])
      //$('#results').html("<a href=" + repo["html_url"] + ">")
      //$('#results').html(repo["owner"]["login"])
      //$('#results').html(repo["owner"]["avatar_url"])
      //$('#results').html("<a href=" + repo["owner"]["html_url"] + ">")
      //event.preventDefault()

    //})
  })
})
}


function clickSearch() {
  $('#search').on('click', searchRepositories )
}

function showCommits() {



}