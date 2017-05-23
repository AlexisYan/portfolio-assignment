
'use strict';

var app = app || {};
(function (module){
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
      app.view.initIndexPage();
    }else{
      $.getJSON('/data/projects.json')
      .then(function(data){
        Repo.loadAll(data);
        app.view.initIndexPage();
        localStorage.rawData = JSON.stringify(data);
      })
    }
  }
  module.Repo = Repo;
})(app);
