// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets

function hideList () {
  $('li[id^="title"]').siblings().fadeOut(0);
  $('#card1').siblings().fadeOut(0);
  
};

function foncFadeIn (elem) {
  var title = elem.value;
  $("li").siblings("#title_" + title).fadeIn(400, "swing", 
                        ($('li[id^="title"]').siblings().not($("li").siblings("#title_" + title))).fadeOut(0));
};

//   email 
 function revele (id) {
   var email_id = id 
   $('#email_' + email_id).children().fadeIn(500);
   $('#email_' + email_id).children().first().children().css("fontSize", 25);
   $('#email_' + email_id).children().first().children().attr('class', "btn btn-dark");
 }
 // fin email

$(document).ready( function() {
  // email hide body et button
  $('.email_hide').siblings().fadeOut(0);
  $('#img_avatar').hover(
    function() {
      $('.list-nav').stop().slideDown(200);
    },
    function() {
      $('.list-nav').stop().delay(4000).slideUp(200);
    })
});

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function foncLeft() {
  $("#carousel > :visible").fadeOut(200);
  $("#carousel > :visible").prev().fadeIn(200);
  if($("#carousel > :hidden")){
    ("#card9").fadeIn(200);
  }
}


function foncRight() {
  $("#carousel > :visible").fadeOut(200);
  $("#carousel > :visible").next().fadeIn(200);
  if($("#carousel > :hidden")){
    ("#card1").fadeIn(200);
  }
}