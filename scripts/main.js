
'use strict';

function Repo (rawDataObj){
  this.title = rawDataObj.title;
  this.titleUrl = rawDataObj.titleUrl;
  this.date = rawDataObj.date;
  this.body = rawDataObj.body;
}

Repo.all=[];

Repo.prototype.toHtml = function(){
  let $newRepo = $('#project-template').html();
  let $newRepoRender = Handlebars.compile($newRepo);
  return $newRepoRender(this);
};

Repo.loadAll = function(rawData){
  rawData.forEach(function(ele){
    Repo.all.push(new Repo(ele));
  })
}
Repo.fetchAll = function(){
  if (localStorage.rawData){
    Repo.loadAll(JSON.parse(localStorage.rawData));
    view.initIndexPage();
  }else{
    $.getJSON('/data/projects.json')
    .then(function(data){
      Repo.loadAll(data);
      view.initIndexPage();
      localStorage.rawData = data;
    })
  }
}
