const SidebarBox1 = () => {
  return (
    <div className="sidebar-box">
      <h1>Il Sogno</h1>
      <p>Immerse yourself in the dream</p>
      <p>
        Via Salvatore Quasimodo, 38 <br />
        4011 Amalfi
      </p>
      <p>8:00 - 00:00</p>
      <p>+00000000</p>
      <button
        className="btn-sidebar"
        onClick={() => (window.location.href = "reservations.html")}
      >
        Book a Table
      </button>
    </div>
  );
};

const SidebarBox2 = () => {
  return (
    <div className="sidebar-box">
      <h1>Featured Dish</h1>
      <div className="sidebar-image"></div>
      <p>
        Signature Truffle Pasta <br />
        bestseller since 2020
      </p>
    </div>
  );
};

const SidebarBox3 = () => {
  return (
    <div className="sidebar-box">
      <h1>Popular Blog Posts</h1>
      <p>"How we make our sourdough starter"</p>
      <p>"Behind the scenes in our kitchen"</p>
      <p>"Why fresh herbs matter"</p>
    </div>
  );
};

const SidebarBox4 = () => {
  return (
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
  );
};

const Sidebar = () => {
  return (
    <section className="sidebar-section">
      <SidebarBox1 />
      <SidebarBox2 />
      <SidebarBox3 />
      <SidebarBox4 />
    </section>
  );
};

export default Sidebar;