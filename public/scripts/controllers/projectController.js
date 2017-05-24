'use strict';
var app = app || {};

(function(module) {
  const projectController = {};

  projectController.init = function() {
    app.Repo.fetchAll(app.view.initIndexPage);
    $('.tab-content').hide();
    $('#about').fadeIn();
  }
  module.aboutController = projectController;
})(app);
