import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  // =========================
  // STATES
  // =========================
  const [menuOpen, setMenuOpen] = useState(false);
  const [secondaryOpen, setSecondaryOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  // =========================
  // TOGGLES
  // =========================
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const toggleSecondary = () => {
    if (window.innerWidth > 768) {
      setSecondaryOpen(prev => !prev);
    }
  };

  // =========================
  // SCROLL HIDE NAVBAR
  // =========================
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScroll && window.scrollY > 100) {
        setHideNavbar(true);
        setMenuOpen(false);
      } else {
        setHideNavbar(false);
      }
      lastScroll = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =========================
  // CLOSE SECONDARY ON OUTSIDE CLICK
  // =========================
  useEffect(() => {
    const closeOutside = (e) => {
      if (
        !e.target.closest("#nav_menu_secondary") &&
        !e.target.closest("#more")
      ) {
        setSecondaryOpen(false);
      }
    };

    document.addEventListener("click", closeOutside);
    return () => document.removeEventListener("click", closeOutside);
  }, []);

  // =========================
  // JSX
  // =========================
  return (
    <nav className={`navbar ${hideNavbar ? "hidden" : ""}`}>
      <div className={`navbar_container ${menuOpen ? "expand" : ""}`}>

        {/* LOGO */}
        <a href="/" className="logo_link">
          <img
            src="/photos/IlSogno.png"
            alt="Logo"
            className="logo"
          />
        </a>

        {/* MAIN MENU */}
        <ul className={`nav_menu ${menuOpen ? "show" : ""}`}>
          <li className="nav_item"><a className="nav_link">Home</a></li>
          <li className="nav_item"><a className="nav_link">Menu</a></li>
          <li className="nav_item"><a className="nav_link">Music</a></li>
          <li className="nav_item"><a className="nav_link">Reservations</a></li>

          <li className="nav_item">
            <button
              id="more"
              className="nav_link"
              onClick={toggleSecondary}
            >
              More ▾
            </button>
          </li>
        </ul>

        {/* SECONDARY MENU */}
        <ul
          id="nav_menu_secondary"
          className={`nav_menu_secondary ${secondaryOpen ? "grow" : ""}`}
        >
          <li className="nav_item"><a className="nav_link">Location</a></li>
          <li className="nav_item"><a className="nav_link">Tickets</a></li>
          <li className="nav_item"><a className="nav_link">Gallery</a></li>
          <li className="nav_item"><a className="nav_link">Blog</a></li>
          <li className="nav_item"><a className="nav_link">About Us</a></li>
        </ul>

        {/* HAMBURGER */}
        <div className="navbar_toggle" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? "rotate1" : ""}`} />
          <span className={`bar ${menuOpen ? "fade" : ""}`} />
          <span className={`bar ${menuOpen ? "rotate2" : ""}`} />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
