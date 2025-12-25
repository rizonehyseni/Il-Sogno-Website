import {useState} from "react";

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
  const [email, setEmail] = useState("");
  const [error, setEmailError] = useState("");

  // dojna me validu emailen 
  const isValidEmail = (email) => {
    if (email.includes(" ")) return false; // sbon me pas hapsira nr email

    const parts = email.split("@");
    if (parts.length !== 2) return false; // veq 1 @ lejohet, e kqyr mas spliti a i ka array-i 2 pjese

    const [local, domain] = parts;
    if (!local || !domain) return false; // duhet tekst para edhe mas @

    if (!domain.includes(".")) return false;//nese domeni ska pike s'bon

    const domainParts = domain.split(".");
    const topLevelDomain = domainParts[domainParts.length - 1];//e merr pjesen e fundit ose qajo mas pikes
    if (topLevelDomain.length < 2) return false; //qikjo e kqyr a o top level, domaini nrregull se duhet mi pas ma shume se 2 karaktere

    return true;
  };

  //dojna me validu emailen qata e kena qit ni state per email edhe nja per error 
  const emailSubmit = (e) => {
    e.preventDefault(); //se len browserin me bo submit pa u validu nihere 

    if (!isValidEmail(email)) {
      setEmailError("Enter a valid email address"); // nese s'osht valid 
      return;
    }

    setEmailError(""); //nese osht nrregull e reset errorin
    setEmail("");
  };

  return (
    <div className="sidebar-box">
      <form onSubmit={emailSubmit}>
        <h1>Subscribe</h1>
        <p>Join thousands of regular readers.</p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value); //e kqyr vleren qe e shkrun nforme
            setEmailError(""); // e hek errorin sa her fillon me shkru
          }}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

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