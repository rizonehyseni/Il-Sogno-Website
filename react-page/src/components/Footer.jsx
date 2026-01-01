
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links-container">
        <div className="logo-section">
          <img src="./photos/IlSogno.png" width="210" alt="Restaurant Logo" />
          <p>Enjoy our delicious cuisine and warm ambiance.</p>
        </div>

        <div>
          <h3>Details</h3>
          <ul>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="menu.html">Reservations</a></li>
            <li><a href="music.html">Music</a></li>
            <li><a href="location.html">Location</a></li>
            <li><a href="gallery.html">Gallery</a></li>
          </ul>
        </div>

        <div>
          <h3>Other</h3>
          <ul>
            <li><a href="/PRIVACY_POLICY.md">Privacy Policy</a></li>
            <li><a href="/TERMS_AND_CONDITIONS.md">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h3>Address</h3>
          <p>123 Main Street, Amalfi Coast, Italy</p>
          <h3>Contact Us</h3>
          <a href="mailto:ilsogno@restaurant.com">
            ilsogno@restaurant.com
          </a>
        </div>
      </div>

      <div className="footer_bar">
        <p>© 2025 Il Sogno Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;