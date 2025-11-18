let scrollFundit = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollFundit && window.scrollY > 100) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
  scrollFundit = window.scrollY;
});




//typewriter effect for gallery introuction


const galleryTitle = document.getElementById('gallery_title');
const galleryDesc = document.getElementById('gallery_desc');

const title = 'Galleria dei Sogni';
const desc = ' Step into a visual journey through Il Sogno - where art, flavor, and atmosphere come together. Each image captures a moment of inspiration, from the warm lights of our bar to the elegance of Italian craftsmanship.';

let i = 0;
let j = 0;
let hasTyped = false;

const typeWriter = () => {
  if (i < title.length) {
    galleryTitle.textContent += title.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  } else if (j < desc.length) {
    galleryDesc.textContent += desc.charAt(j);
    j++;
    setTimeout(typeWriter, 20);
  }
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasTyped) {
      typeWriter();
      hasTyped = true;
    }
  });
});

observer.observe(galleryTitle);
observer.observe(galleryDesc);
