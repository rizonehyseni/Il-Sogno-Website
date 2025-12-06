// Animacion super i thjeshtë – funksionon gjithmonë
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-up').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// Typewriter (shumë i thjeshtë)
const text = "Enjoy our delicious cuisine and warm ambiance.";
const hero = document.getElementById('hero-typewriter');
let i = 0;
setInterval(() => {
  if (i < text.length) hero.textContent += text[i++];
}, 80);

