

  //navbar ani for mobile

  const navbarToggle = document.querySelector('.navbar_toggle');
const navMenu = document.querySelector('.nav_menu');


navbarToggle.addEventListener('click', () => {//kur e click i ndrron tani barsat i bon x
    navMenu.classList.toggle('show'); 

  
    const bars = document.querySelectorAll('.bar');
    bars[0].classList.toggle('rotate1');
    bars[1].classList.toggle('fade');
    bars[2].classList.toggle('rotate2');


   
});




//remove nav ani kur tja bojsh scroll


  const navMenuD = document.querySelector(".nav_menu");
  const logoAni = document.querySelector(".logo");
  const heroText = document.querySelector(".hero_text");


  let scrollFundit = window.scrollY;
  const navbar = document.querySelector(".navbar");
  const bars1 = document.querySelectorAll('.bar');

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollFundit && window.scrollY > 100) {
      navbar.classList.add("hidden");
      navMenuD.classList.remove('show');
       bars1[0].classList.remove('rotate1');
    bars1[1].classList.remove('fade');
    bars1[2].classList.remove('rotate2');
    } else {
      navbar.classList.remove("hidden");
    }
    scrollFundit = window.scrollY;
  });




  





  //nav ani per secondary menyne

  const secondMenu = document.getElementById('nav_menu_secondary');
  const more = document.getElementById('more');

  more.addEventListener('click', () =>{
     if (window.innerWidth > 768) {
        secondMenu.classList.toggle('grow');
    }
  }
  )


  
  //kur tklikojsh jashte navit me hjek

  document.addEventListener('click', (e) => {
    if (
        secondMenu.classList.contains('grow') &&
        !secondMenu.contains(e.target) &&
        !more.contains(e.target)
    ) {
        secondMenu.classList.remove('grow');
    }
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



