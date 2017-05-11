'use strict';
var project = [];

function Repo (rawDataObj){
  this.title = rawDataObj.title;
  this.titleUrl = rawDataObj.titleUrl;
  // this.date = rawDataObj.date;
  this.body = rawDataObj.body;
}

Repo.prototype.toHtml = function(){
  var $newRepo = $('article.template').clone();
  $newRepo.find('h1').html(this.title);
  $newRepo.find('a').attr('href', this.titleUrl);
  $newRepo.find('.description').html(this.body);
  return $newRepo;
};
rawData.forEach(function(articleObject) {
  project.push(new Repo(articleObject));
});

project.forEach(function(article){
  $('#projects').append(article.toHtml());
});
