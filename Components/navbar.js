class NavbarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <link rel="stylesheet" href="/CSS/style.css">
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
              <a href="#" class="nav_link" id="more">More ▾</a>
              <ul class="nav_menu" id="nav_menu_secondary">
                <li class="nav_item"><a href="location.html" class="nav_link">Location</a></li>
                <li class="nav_item"><a href="tickets.html" class="nav_link">Tickets</a></li>
                <li class="nav_item"><a href="gallery.html" class="nav_link">Gallery</a></li>
                <li class="nav_item"><a href="blog.html" class="nav_link">Blog</a></li>
                <li class="nav_item"><a href="about.html" class="nav_link">About Us</a></li>
              </ul>
            </li>
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

