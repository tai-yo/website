var $ = require('jquery');
var _ = require('underscore');

$(function() {

  var $html = $('html');

  var timer = setInterval(function() {
    if ($html.hasClass('wf-active')) {
      resizeHeight();
      clearTimeout(timer);
    }
  }, 50);

  function resizeHeight() {
    var $err = $('.site-error');

    $err.height($(window).height() - 138);
    $err.fadeIn(750, function() {
      console.log('wheeeee');
    });
  }
});