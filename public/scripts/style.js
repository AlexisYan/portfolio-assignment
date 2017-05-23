'use strict'
var app = app || {};
(function(module) {
  const view = {};
  view.initIndexPage = function (){
    $('.tab-home').click(function(e){
      e.preventDefault();
      $('img').slideToggle('slow');
    })
    $('.tab-project').on('click', function(){
      $('#projects').toggle('block');
    });
    $('.gif').fadeOut(6000);
    app.Repo.all.forEach(function(project){
      $('#projects').append(project.toHtml());
      console.log(project);
    });
  };
  app.Repo.fetchAll(view.initIndexPage);
  module.view = view;
})(app);
