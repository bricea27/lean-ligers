// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap.min
//= require turbolinks
//= require_tree .

document.addEventListener("DOMContentLoaded", function() {

  var mentorCheck = document.getElementById("user_type_mentor");
  var menteeCheck = document.getElementById("user_type_mentee");
  var advice = document.getElementById('user_advice');

  advice.style.display = "none";
  mentorCheck.addEventListener("click", function(){
    advice.style.display = "block";
  });
  menteeCheck.addEventListener("click", function(){
    advice.style.display = "none";
  });





});
