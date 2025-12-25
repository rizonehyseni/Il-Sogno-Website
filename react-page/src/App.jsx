// App.jsx

import Navbar from "./components/navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import BlogSection from "./components/BlogSection.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";



const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* qiky divi main layout qe mi nda sections dmth qit main section prej pjeseve jahste*/}
      <main className="main-layout">
        <BlogSection />
        <Sidebar />
      </main>

      <Footer />
    </>
  );
};

export default App;


