class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <link rel="stylesheet" href="/Components/footer.css">
   <footer class="footer">
    <div class="links-container">
      <div class="logo-section">
        <a href="/HTML/index.html"><img src="/photos/IlSogno.png" width="210px" alt="Restaurant Logo"></a>
        <p>Enjoy our delicious cuisine and warm ambiance.</p>

      </div>
      <div>
        <h3>Details</h3>
        <ul>
          <li><a href="/HTML/menu.html">menu</a></li>
          <li><a href="/HTML/menu.html" target="blank">reservations</a></li>
          <li><a href="/HTML/music.html">music</a></li>
          <li><a href="/HTML/location.html">location</a></li>
          <li><a href="/HTML/gallery.html">gallery</a></li>

        </ul>
      </div>

      <div>
        <h3>Other</h3>
        <ul>
          <li><a href="/HTML/privacy-policy.html">Privacy Policy</a></li>
          <li><a href="/HTML/terms-conditions.html">Terms and Conditions</a></li>

        </ul>
      </div>

      <div>
        <h3>Address</h3>
        <ul>
          <li><a href="address:123 Main Street,Amalfi Coast, Italy">123 Main Street,Amalfi Coast, Italy</a></li>
        </ul>

        <h3>Contact Us</h3>
        <ul>
          <li><a href="mailto:ilsogno@restaurant.com">ilsogno@restaurant.com</a></li>
        </ul>

      </div>
    </div>

    <div class="footer_bar">
      <p>copyright &copy; 2025 Il Sogno Restaurant. All rights reserved.</p>
    </div>

    </footer>
    `;
  }
}

customElements.define("my-footer", FooterComponent);

