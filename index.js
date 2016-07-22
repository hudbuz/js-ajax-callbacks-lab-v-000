

function searchRepositories() {
  const term = $('#searchTerms').val()
  $.get("https://api.github.com/search/repositories?q=" + term, data => {
 
 const template = Handlebars.compile($('#results').html());

     $('#results').html(template(data))
   }).fail(displayError())

}



function displayError() {

  $('#errors').html("Sorry there was an error.");


}

function showCommits(el) {
const owner = el.dataset.owner
const repo = el.dataset.repository
 $.get('https://api.github.com/repos/' + owner + '/' + repo + '/commits', data => {
     const template = Handlebars.compile($('#commits-template').html())
     $('#details').html(template(data))
   }).fail(error => {
     displayError()
   })


}



function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
   
 
  
});

