$(document).ready(function(){
  $('.item button').click(function(){
    $(this).closest('.item').find('.answer').slideToggle();
  });
});
