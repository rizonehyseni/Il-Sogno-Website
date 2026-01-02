$(document).ready(function () {
  $(".header").click(function () {
    const item = $(this).closest(".item");

    item.toggleClass("active");
    item.find(".answer").slideToggle();
  });
});
