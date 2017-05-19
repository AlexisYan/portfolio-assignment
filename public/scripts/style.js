'use strict'
const view = {};

view.initIndexPage = function (){
  $('.tab-home').click(function(e){
    e.preventDefault();

    $('img').slideToggle('slow');

  })
  $('.tab-project').on('click', function(){
    $('#projects').toggle('block');
  });

  Repo.all.forEach(function(project){
    $('#projects').append(project.toHtml());
    console.log(project);
  });
};
