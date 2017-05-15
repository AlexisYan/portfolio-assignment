'use strict'

$(document).ready(function(){
  $('.tab-home').click(function(e){
    e.preventDefault();
    $('img').slideToggle('slow');
  })
  $('.tab-project').on('click', function(){
    $('#projects').toggle('block');
  });
});
