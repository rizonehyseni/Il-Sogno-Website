$(document).ready(function(){
  $('.header').click(function(){
    $(this).closest('.item').find('.answer').slideToggle();
  });
});
