$(function(){
  var $btn = $('input[type="range"]');
  var $txt = $('#age');
  $txt.html('0');
  $btn.change(function(){
    $txt.html($btn.val());
  });
});
