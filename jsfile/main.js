'use strict';

function Repo (rawDataObj){
  this.title = rawDataObj.title;
  this.titleUrl = rawDataObj.titleUrl;
  this.date = rawDataObj.date;
  this.body = rawDataObj.body;
}
Repo.prototype.toHtml = function(){
  var $newRepo = $('article.template').clone();
}
