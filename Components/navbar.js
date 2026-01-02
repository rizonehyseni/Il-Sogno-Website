class NavbarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
   <link rel="stylesheet" href="/Components/navbar.css">
       <nav class="navbar">
        <div class="navbar_container">
          <a href="index.html" class="logo_link">
            <img src="/photos/IlSogno.png" alt="Logo" class="logo">
          </a>

          <ul class="nav_menu">
            <li class="nav_item"><a href="index.html" class="nav_link">Home</a></li>
            <li class="nav_item"><a href="menu.html" class="nav_link">Menu</a></li>
            <li class="nav_item"><a href="music.html" class="nav_link">Music</a></li>
            <li class="nav_item"><a href="reservations.html" target="_blank" class="nav_link">Reservations</a></li>
            <li class="nav_item more_nav">
              <button type="button" class="nav_link" id="more">More ▾</button>

             
            </li>
             <ul class="nav_menu_secondary" id="nav_menu_secondary">
                <li class="nav_item"><a href="location.html" class="nav_link">Location</a></li>
                <li class="nav_item"><a href="gallery.html" class="nav_link">Gallery</a></li>
                <li class="nav_item"><a href="blog.html" class="nav_link">Blog</a></li>
                <li class="nav_item"><a href="about.html" class="nav_link">About Us</a></li>
                <li class="nav_item"><a href="info.html" class="nav_link">Info</a></li>
              </ul>
          </ul>

          <div class="navbar_toggle" id="mobile_menu">
            <span class="bar">-</span>
            <span class="bar">-</span>
            <span class="bar">-</span>
          </div>
        </div>
      </nav>

    `;
  }
}

customElements.define("my-navbar", NavbarComponent);






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

