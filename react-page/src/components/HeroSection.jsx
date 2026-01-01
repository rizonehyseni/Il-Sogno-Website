import { useEffect, useState } from "react";

const HeroSection = () => {
  const text = `Welcome to Il Sogno, where every dish is crafted with passion, bringing the true flavors of Italy straight to your table. Join us and savor moments made memorable.`;

  const [displayedText, setDisplayedText] = useState("");{/*statei se ndryshon sa here del shkronja*/}
  let speed = 20;{/*sa shpejte iteron te shkronjat */}

  useEffect(() => {
    let i = 0;{/*qe me iteru te karakteret e fjalise */}

    const interval = setInterval(() => {{/*perserit kod per ni kohe te caktume*/}
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }{/*qikjo pjese o qe me nal loopen kur i osht sa gjatesia e tekstit. se len mu shkru sene ekstra */}
    }, speed);

    return () => clearInterval(interval);{/*kur u shkru fjalia qikjo e nal intervalin*/}
  }, []);{/*e thate qe me run animacioni veq ni here*/}

  return (
    <div className="hero-section">
      <div className="hero-divider">
        <h3 id="hero-title">{displayedText}</h3>
      </div>
    </div>
  );
};

export default HeroSection;



