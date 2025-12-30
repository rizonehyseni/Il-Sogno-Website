import { useEffect, useRef, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [secondaryOpen, setSecondaryOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  {/*statesa*/}

  const lastScroll = useRef(window.scrollY);{/*useref e gjen vleren sa ke scroll vertikalisht*/}


  const toggleMenu = () => setMenuOpen(p => !p);{/*dmth kur te klikon menune e ndrron gjendjen*/}

  const toggleSecondary = () => {
    if (window.innerWidth > 768) {
      setSecondaryOpen(p => !p);
    }
  };{/*dmth nese sosht mobile veq ja ndrron gjenjen menyse sekondare*/}

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > lastScroll.current && window.scrollY > 100) {{/*dmth nese ke scroll ma shume se 100px e mshef menyne, e mshel sekondaren nese o qel*/}
        setHidden(true);
        setMenuOpen(false);
        setSecondaryOpen(false);
      } else {
        setHidden(false);
      }
      lastScroll.current = window.scrollY;{/*e llogarit apet a ke leviz*/}
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (e) => {{/*kur klikon jashte menyse ajo e mshel, po nese o mobile sbon sen se osht full size*/}
      if (window.innerWidth <= 768) return;

      if (
        !e.target.closest("#nav_menu_secondary") &&
        !e.target.closest("#more")
      ) {
        setSecondaryOpen(false);
      }
    };

    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  return (
    <nav className={`navbar ${hidden ? "hidden" : ""}`}>{/*nese u aktivizu hidden ja shton klasen hidden*/}
      <div className="navbar_container">

        {/*Logoja*/}
        <div className="navbar_left">
          <a href="index.html" className="logo_link">
            <img src="/photos/IlSogno.png" alt="Logo" className="logo" />
          </a>
        </div>

        {/* menyja kryesore */}
        <ul className={`nav_menu ${menuOpen ? "show" : ""}`}>
          <li className="nav_item"><a href="index.html" className="nav_link">Home</a></li>
          <li className="nav_item"><a href="menu.html" className="nav_link">Menu</a></li>
          <li className="nav_item"><a href="music.html" className="nav_link">Music</a></li>
          <li className="nav_item">
            <a href="reservations.html" target="_blank" className="nav_link">
              Reservations
            </a>
          </li>

          <li className="nav_item more_nav">
            <button id="more" className="nav_link" onClick={toggleSecondary}>
              More ▾
            </button>
          </li>

          {/* dytesore */}
          <ul
            id="nav_menu_secondary"
            className={`nav_menu_secondary ${secondaryOpen ? "grow" : ""}`}
          >
            <li className="nav_item"><a href="location.html" className="nav_link">Location</a></li>
            <li className="nav_item"><a href="tickets.html" className="nav_link">Tickets</a></li>
            <li className="nav_item"><a href="gallery.html" className="nav_link">Gallery</a></li>
            <li className="nav_item"><a href="blog.html" className="nav_link">Blog</a></li>
            <li className="nav_item"><a href="about.html" className="nav_link">About Us</a></li>
          </ul>
        </ul>

        {/* hamburger menyja*/}
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
