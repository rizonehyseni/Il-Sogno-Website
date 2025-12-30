
document.body.classList.add("loading");

window.addEventListener("load", () => {
  const intro = document.querySelector(".intro_container");
  setTimeout(() => {
    intro.style.display = "none";
    document.body.classList.remove("loading");
  }, 3500);
});




const text = `"Music is the cup which holds the wine of silence."`;
const text2 = "- Robert Fripp";
const text3 =
  "Chef Luca reveals the secrets of truffle season — from selecting the finest local varieties to crafting dishes that capture their earthy aroma.";

const typingText = document.getElementById("divider_quote");
const typingText2 = document.getElementById("divider_author");
const typingText3 = document.getElementById("blog_info");

let i = 0,
  j = 0,
  k = 0;
let hasTyped = false;

function typeWriter() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i++);
    setTimeout(typeWriter, 40);
  } else if (j < text2.length) {
    typingText2.textContent += text2.charAt(j++);
    setTimeout(typeWriter, 40);
  } else if (k < text3.length) {
    typingText3.textContent += text3.charAt(k++);
    setTimeout(typeWriter, 30);
  }
}



const aboutText = document.querySelector(".about_image_text");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // About image text
      if (entry.target.classList.contains("about_image_text")) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }

      // Typewriter trigger
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





//me scrollreveal
document.addEventListener("DOMContentLoaded", () => {
  const sr = ScrollReveal({
    distance: "40px",
    duration: 700,
    easing: "ease-out",
    opacity: 0,
    reset: false,
    mobile: false
  });

  sr.reveal(".about_card", {
    origin: "bottom",
    interval: 150
  });

  sr.reveal(".menu_img", { origin: "bottom" });
  sr.reveal(".menu_title", { origin: "bottom", delay: 100 });
  sr.reveal(".menu_desc", { origin: "bottom", delay: 150 });
  sr.reveal(".menu_button", { origin: "bottom", delay: 200 });


  sr.reveal(".blog_title", { origin: "bottom" });
  sr.reveal(".blog_desc", { origin: "bottom", delay: 100 });
  sr.reveal(".blog_image", { origin: "bottom", delay: 150 });
  sr.reveal(".blog_news_title", { origin: "bottom", delay: 200 });
});
