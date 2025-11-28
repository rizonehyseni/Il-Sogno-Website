document.addEventListener('DOMContentLoaded', () => {
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => {
    fadeObserver.observe(el);
  });
});




const heroText = "Enjoy our delicious cuisine and warm ambiance.";
const heroElement = document.getElementById("hero-typewriter");

let i = 0;
let hasStarted = false;

function typeHero() {
  if (hasStarted) return;
  hasStarted = true;

  function type() {
    if (i < heroText.length) {
      heroElement.textContent += heroText.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}


const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      typeHero();
      heroObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

heroObserver.observe(heroElement);
