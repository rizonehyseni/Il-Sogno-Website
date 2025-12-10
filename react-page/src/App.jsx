const Navbar = ()=>{
  return(
     <div className="navbar">
        <div className="navbar_container">
          <a href="index.html" class="logo_link">
            <img src="/photos/IlSogno.png" alt="Logo" className="logo"></img>
          </a>

          <ul className="nav_menu">
            <li className="nav_item"><a href="index.html" className="nav_link">Home</a></li>
            <li className="nav_item"><a href="menu.html" className="nav_link">Menu</a></li>
            <li className="nav_item"><a href="music.html" className="nav_link">Music</a></li>
            <li className="nav_item"><a href="reservations.html" target="_blank" className="nav_link">Reservations</a></li>
            <li className="nav_item more_nav">
              <button type="button" className="nav_link" id="more">More ▾</button>

             
            </li>
             <ul className="nav_menu_secondary" id="nav_menu_secondary">
                <li className="nav_item"><a href="location.html" className="nav_link">Location</a></li>
                <li className="nav_item"><a href="tickets.html" className="nav_link">Tickets</a></li>
                <li className="nav_item"><a href="gallery.html" className="nav_link">Gallery</a></li>
                <li className="nav_item"><a href="blog.html" className="nav_link">Blog</a></li>
                <li className="nav_item"><a href="about.html" className="nav_link">About Us</a></li>
              </ul>
          </ul>

          <div className="navbar_toggle" id="mobile_menu">
            <span className="bar">-</span>
            <span className="bar">-</span>
            <span className="bar">-</span>
          </div>
        </div>
      </div>
  )
}
const App = () => {



  return (
    <div>
    <Navbar/>
    </div>
  )
}

export default App
