$(document).ready(function () {
  const $eventCards = $(".event-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $(entry.target).addClass("show");
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  $eventCards.each(function () {
    observer.observe(this);
  });
});

