

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




//images load so they appear ma smooth



const images = document.querySelectorAll('.images_container');













const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasTyped) {
      typeWriter();
      hasTyped = true;
    }



    //images

    if (entry.target.classList.contains("images_container") && entry.isIntersecting) {
      entry.target.classList.add("show");
      
    }
  });
});

observer.observe(galleryTitle);
observer.observe(galleryDesc);

//to observe all images

images.forEach(i => observer.observe(i));



