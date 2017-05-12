
'use strict';
var projectArray = [];

function Repo (rawDataObj){
  this.title = rawDataObj.title;
  this.titleUrl = rawDataObj.titleUrl;
  this.date = rawDataObj.date;
  this.body = rawDataObj.body;
}

Repo.prototype.toHtml = function(){
  var $newRepo = $('#project-template').html();
  var $newRepoRender = Handlebars.compile($newRepo);
  return $newRepoRender(this);
};
rawData.forEach(function(articleObject) {
  projectArray.push(new Repo(articleObject));
});
projectArray.forEach(function(project){
  $('#projects').append(project.toHtml());
  console.log(project);
});
