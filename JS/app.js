document.body.classList.add("loading");

window.addEventListener("load", () => {
  const intro = document.querySelector(".intro_container");
  setTimeout(() => {
    intro.style.display = "none";
    document.body.classList.remove("loading");
  }, 3500);
});
//body tagut po ja len klasen loading derisa te keryhet animacioni per intro
//mas 3.5s intro containerin e mshefum


//teksti qe duhet mu shfaq ne faqe
const text = `"Music is the cup which holds the wine of silence."`;
const text2 = "- Robert Fripp";
const text3 =
  "Chef Luca reveals the secrets of truffle season — from selecting the finest local varieties to crafting dishes that capture their earthy aroma.";

//var per qato eleemnte
const typingText = document.getElementById("divider_quote");
const typingText2 = document.getElementById("divider_author");
const typingText3 = document.getElementById("blog_info");


//iterator per secilen fjali
let i = 0,
  j = 0,
  k = 0;
let hasTyped = false;//qe me kontrollu kur bohet animacioni


function typeWriter() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i++);//po ja shtojna elementit textin e fjalise
    setTimeout(typeWriter, 40);//mas cdo 40ms e thirr typewriterin apet
  } else if (j < text2.length) {
    typingText2.textContent += text2.charAt(j++);
    setTimeout(typeWriter, 40);
  } else if (k < text3.length) {
    typingText3.textContent += text3.charAt(k++);
    setTimeout(typeWriter, 30);
  }
}


//observeri
const aboutText = document.querySelector(".about_image_text");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;//nese elementi nuk doket duhet mu nderpre

      // About image text
      if (entry.target.classList.contains("about_image_text")) {//pe targeton elementin
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }

      // Typewriter trigger
      //nese elementii targetum e ka id, dhe nuk ka shkru, atehere ...
      if (
        (entry.target.id === "divider_quote" ||
          entry.target.id === "blog_info") &&
        !hasTyped
      ) {
        hasTyped = true;
        typeWriter();
      }
    });
  },
  {
    threshold: 0.3
  }
);


observer.observe(aboutText);
observer.observe(typingText);
observer.observe(typingText3);




//me scrollreveal(librari)

document.addEventListener("DOMContentLoaded", () => {
  //1 animacion
  const sr = ScrollReveal({
    distance: "40px",
    duration: 700,
    easing: "ease-out",
    opacity: 0,
    reset: false//animacioni ndodh veq 1 here
  });

  //elementet qe i targeton
  sr.reveal(".about_card", {
    origin: "bottom",//prej ku ja nis animacioni
    interval: 150,//sa me prit per mu shfaq tjetri element
    beforeReveal: el => {
      el.style.transform = "none";//e hjek qat transformin qe j bon vete libraria (distance) para se mu shfaq el
    }
  });

  sr.reveal(".menu_img", { origin: "bottom" });
  sr.reveal(".menu_title", { origin: "bottom", delay: 100 });//sa mu vonu per mw kalu te tjetra
  sr.reveal(".menu_desc", { origin: "bottom", delay: 150 });
  sr.reveal(".menu_button", { origin: "bottom", delay: 200 });

  sr.reveal(".blog_title", { origin: "bottom" });
  sr.reveal(".blog_desc", { origin: "bottom", delay: 100 });
  sr.reveal(".blog_image", { origin: "bottom", delay: 150 });
  sr.reveal(".blog_news_title", { origin: "bottom", delay: 200 });
});
