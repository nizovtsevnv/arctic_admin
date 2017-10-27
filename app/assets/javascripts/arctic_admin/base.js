//= require jquery
//= require jquery_ujs
//= require active_admin/base

$(function() {
  var animationFilterDone = true;
  $('#sidebar').click(function (e) {
    var position = $(this).position();
    var width = $(this).width();
    //if (e.pageX < position.left) {
      if(animationFilterDone == true) {
        animationFilterDone = false;
        if ($(this).css('right') == '0px') {
          $(this).css('position', 'fixed');
          $(this).animate({
            right: "-="+width
          }, 300, function() {
            animationFilterDone = true;
          });
        } else {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          $(this).animate({
            right: "+="+width
          }, 300, function() {
            $(this).css('position', 'absolute');
            animationFilterDone = true;
          });
        }
      }
    //}
  });

  var animationDone = true;
  $('#utility_nav').click(function (e) {
    console.log(e.pageX);
    var position = $(this).position();
    var tabs = $('#tabs');
    var width = Math.round(tabs[0].getBoundingClientRect().width);
    console.log(position.left);
    console.log(tabs);
    console.log(width);

    //if (e.pageX < (position.left + 40)) {
      if(animationDone == true) {
        animationDone = false;
        if (tabs.css('left') == '0px') {
          //tabs.css('position', 'fixed');
          tabs.animate({
            left: "-="+width
          }, 300, function() {
            animationDone = true;
          });
        } else {
          //document.body.scrollTop = document.documentElement.scrollTop = 0;
          tabs.animate({
            left: "+="+width
          }, 300, function() {
            //tabs.css('position', 'fixed');
            animationDone = true;
          });
        }
      }
    //}
  });

  $('body').click(function (e) {
    var tabs = $('#tabs');
    var width = Math.round(tabs[0].getBoundingClientRect().width);
    if (tabs.css('left') == '0px') {
      if (e.pageX > width && e.pageY > 60) {
        if(animationDone == true) {
          animationDone = false;
          tabs.animate({
            left: "-="+width
          }, 300, function() {
            animationDone = true;
          });
        }
      }
    }
  });

  $('#tabs .has_nested').click(function (e) {
    if ($(this).hasClass('open') == true) {
      $(this).removeClass('open');
    } else {
      $(this).addClass('open');
    }
  });
});
