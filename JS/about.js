
// js kodi per timeline
const timeline = document.querySelector(".timeline");
const line = document.querySelector(".timeline-innerline");
const items = document.querySelectorAll(".timeline ul li");

let started = false;

function startTimeline() {
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("active");

      const progress = ((index + 1) / items.length) * 100;

      if (window.innerWidth >= 728) {
        line.style.width = progress + "%";
      } else {
        line.style.height = progress + "%";
      }
    }, index * 1000);
  });
}

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting && !started) {
      started = true;
      startTimeline();
    }
  },
  {
    threshold: 0.3, // bohet trigger kur osht visible 30%
  }
);
observer.observe(timeline);

window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-up').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

