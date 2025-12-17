$(document).ready(function () {
  const $cards = $(".event-card");

  $cards.css({
    opacity: 0,
    transform: "translateY(40px)"
  });

  function revealOnScroll() {
    const windowBottom = $(window).scrollTop() + $(window).height();

    $cards.each(function () {
      const $card = $(this);

      if ($card.data("shown")) return;

      if ($card.offset().top < windowBottom - 100) {
        $card
          .data("shown", true)
          .animate(
            { opacity: 1 },
            {
              duration: 700,
              easing: "swing",
              step: function () {
                $(this).css("transform", "translateY(0)");
              }
            }
          );
      }
    });
  }

  $(window).on("scroll", revealOnScroll);
  revealOnScroll();
});
