import { useEffect, useState } from "react";

const HeroSection = () => {
  const text = `Welcome to Il Sogno, where every dish is crafted with passion, bringing the true flavors of Italy straight to your table.
Join us and savor moments made memorable.`;

  const [displayedText, setDisplayedText] = useState("");
  let speed = 20;

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-divider">
        <h3 id="hero-title">{displayedText}</h3>
      </div>
    </div>
  );
};

export default HeroSection;



