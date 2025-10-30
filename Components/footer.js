class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     
  <footer>
    <div class="footer_container">
      <div class="footer_col">

        <div class="footer_logo">
          <a href="index.html"><img src="/photos/IlSogno.png" alt=""></a>
        </div>
        <p class="footer_text">
          Enjoy our delicious cuisine and warm ambiance.
        </p>
        <ul class="footer_socials">
          <li><a href="#"><img src="/photos/icons8-facebook-logo-50.png" alt=""></a></li>
          <li><a href="#"><img src="/photos/icons8-instagram-50.png" alt=""></a></li>

        </ul>
      </div>

      <div class="footer_col">
        <h4>Details</h4>
        <ul class="footer_links">
          <li><a href="menu.html">menu</a></li>
          <li><a href="reservations.html" target="blank">reservations</a></li>
          <li><a href="music.html">music</a></li>
          <li><a href="location.html">location</a></li>
        </ul>
      </div>

      <div class="footer_col">
        <h4>Other</h4>
        <ul class="footer_links">
          <li><a href="/PRIVACY_POLICY.md">Privacy Policy</a></li>
          <li><a href="/TERMS_AND_CONDITIONS.md">Terms and Conditions</a></li>
        </ul>
      </div>

      <div class="footer_col">
        <h4>Contact Us</h4>
        <div class="footer_links">
          <a class="footer_text" href="tel:+38344000000">
            +383 44 000 000
          </a>
          <a class="email_contact" href="mailto:rizonehyseni@gmail.com">
            ilsogno@restaurant.com</a>
        </div>
      </div>



    </div>
    <div class="footer_bar">
      copyright @ 2025 Il Sogno Restaurant. All rights reserved.
    </div>
  </footer>
    `;
  }
}

customElements.define("my-footer", FooterComponent);