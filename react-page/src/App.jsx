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


const HeroSection=()=>{
  return(
    <div className="hero-section">
      <div className="hero-divider">
         <h3 id="hero-title"></h3>
       </div>
    </div>
  )
}

const BlogSection=()=>{
  return(
    
    <div className="content-wrapper">
      <section className="blog-section">
        <h1 className="blog-title">Behind Our Autumn Menu</h1>

        <img src="/photos/sogno5.png" class="blog-image" ></img>

        <div className="blog-paragraph">
          <p>
            Chef Luca reveals the secrets of truffle season from selecting the finest local varieties 
            to crafting dishes that capture their earthy aroma.
          </p>
        </div>

        <div className="blog-footer">
          <button className="btn-read-more" onclick="location.href='about.html'">
            Read More
          </button>
          <p>By IlSogno, 2025</p>
        </div>
      </section>
      </div>
  )
}

const SidebarBox1=()=>{
  return(
       <div className="sidebar-box">
          <h1>Il Sogno</h1>
          <p>Immerse yourself in the dream</p>
           <p>Via Salvatore Quasimodo, 38<br></br>4011 Amalfi</p>
           <p>8:00-00:00</p>
           <p>+00000000</p>
           <button className="btn-sidebar" onclick="location.href='reservations.html'">
             Book a Table
           </button>
        </div>
  )
}


const SidebarBox2 =()=>{
  return(
     <div className="sidebar-box">
           <h1>Featured Dish</h1>
           <div className="sidebar-image"></div>
           <p>Signature Truffle Pasta - our<br></br>bestseller since 2020</p>
    </div>
  )
}

const SidebarBox3=()=>{
  return(
        <div className="sidebar-box">
           <h1>Popular Blog Posts</h1>
           <p>"How we make our sourdough starter"</p>
           <p>"Behind the scenes in our kitchen"</p>
           <p>"Why fresh herbs matter"</p>
         </div>
  )
}

const SidebarBox4=()=>{
  return(
     <div className="sidebar-box">
           <form>
             <h1>Subscribe</h1>
             <p>Join thousands of regular readers.</p>
             <input type="email" placeholder="Email address" />
             <button className="btn-sidebar" type="submit">
               Submit
             </button>
           </form>
         </div>
  )
}
  
const Sidebar=()=>{
  return(
     <section className="sidebar-section">
      <SidebarBox1/>
      <SidebarBox2/>
      <SidebarBox3/>
      <SidebarBox4/>
     </section>
  )
}


const Footer=()=>{
  return(
    <footer className="footer">
    <div className="links-container">
      <div className="logo-section">
        <a href="/HTML/index.html"><img src="/photos/IlSogno.png" width="210px" alt="Restaurant Logo"></img></a>
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
          <li><a href="/PRIVACY_POLICY.md">Privacy Policy</a></li>
          <li><a href="/TERMS_AND_CONDITIONS.md">Terms and Conditions</a></li>

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

    <div className="footer_bar">
      <p>copyright &copy; 2025 Il Sogno Restaurant. All rights reserved.</p>
    </div>

    </footer>
  )
}


const App = () => {



  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <BlogSection/>
    <Sidebar/>
    <Footer/>
    </div>
  )
}

export default App
