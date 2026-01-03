
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

// observeri per fade up
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('show');
      fadeObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll('.fade-up').forEach(el => {
  fadeObserver.observe(el);
});



// teksti me observer quote

const tekst = "“La cucina è amore - food is love where all dishes tell our story.”";
const citimi = document.getElementById("text-quote");
let pozita = 0, shkruar = false;

const shtypi = () => pozita < tekst.length && (citimi.textContent += tekst[pozita++], setTimeout(shtypi, 60));

new IntersectionObserver((hyrjet, vëzhguesi) => {
  if (shkruar) return;
  if (hyrjet.some(h => h.isIntersecting)) {
    shkruar = true;
    shtypi();
    vëzhguesi.disconnect();
  }
}, { threshold: 0.5 }).observe(citimi);
