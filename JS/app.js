if (window.innerWidth > 768) {

  document.body.classList.add('loading');

  window.addEventListener('load', () => {
    const intro = document.querySelector('.intro_container');
    setTimeout(() => {
      intro.style.display = 'none';
      document.body.classList.remove('loading');
    }, 3500);
  });

  const navMenuD = document.querySelector(".nav_menu");
  const logoAni = document.querySelector(".logo");
  const heroText = document.querySelector(".hero_text");
  const navCo = document.querySelector(".navbar_container");
  const heroTextCo = document.querySelector(".hero_text_container");

  window.addEventListener('scroll', () => {
    if (window.scrollY < 30) {
      navMenuD.classList.add('hide');
      logoAni.classList.add('ani');
      heroText.classList.add('show');
      navCo.classList.add('expand');
      heroTextCo.classList.add('expand');
    } else {
      navMenuD.classList.remove('hide');
      logoAni.classList.remove('ani');
      heroText.classList.remove('show');
      navCo.classList.remove('expand');
      heroTextCo.classList.remove('expand');
    }
  });

  let scrollFundit = window.scrollY;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollFundit && window.scrollY > 100) {
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }
    scrollFundit = window.scrollY;
  });

  const text = `"Music is the cup which holds the wine of silence."`;
  const text2 = '- Robert Fripp';
  const text3 = '  Chef Luca reveals the secrets of truffle season — from selecting the finest local varieties to crafting dishes that capture their earthy aroma.';
  const typingText = document.getElementById("divider_quote");
  const typingText2 = document.getElementById("divider_author");
  const typingText3 = document.getElementById("blog_info");

  let i = 0;
  let j = 0;
  let k = 0;
  let hasTyped = false;

  function typeWriter() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 40);
    } else if (j < text2.length) {
      typingText2.textContent += text2.charAt(j);
      j++;
      setTimeout(typeWriter, 40);
    } else if (k < text3.length) {
      typingText3.textContent += text3.charAt(k);
      k++;
      setTimeout(typeWriter, 30);
    }
  }

  const aboutText = document.querySelector(".about_image_text");
  const aboutCard = document.querySelectorAll(".about_card");
  const menuImage = document.querySelector(".menu_img");
  const menuTitle = document.querySelector(".menu_title");
  const menuDesc = document.querySelector(".menu_desc");
  const menuBtn = document.querySelector(".menu_button");
  const blogImage = document.querySelector(".blog_image");
  const blogNews = document.querySelector(".blog_news");
  const blogInfo = document.querySelector(".blog_info");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const element = entry.target;

      if (element.classList.contains("about_image_text") && entry.isIntersecting) {
        aboutText.classList.add("show");
        observer.unobserve(element);
      }

      if (element.classList.contains("about_card") && entry.isIntersecting) {
        aboutCard.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 100);
        });
      } else if (element.classList.contains("about_card") && !entry.isIntersecting) {
        aboutCard.forEach(card => card.classList.remove("show"));
      }

      if (element.classList.contains("menu_img") && entry.isIntersecting) {
        menuImage.classList.add("show");
        observer.unobserve(element);
      }
      if (element.classList.contains("menu_title") && entry.isIntersecting) {
        menuTitle.classList.add("show");
        observer.unobserve(element);
      }
      if (element.classList.contains("menu_desc") && entry.isIntersecting) {
        menuDesc.classList.add("show");
        observer.unobserve(element);
      }
      if (element.classList.contains("menu_button") && entry.isIntersecting) {
        menuBtn.classList.add("show");
        observer.unobserve(element);
      }

      if (element.id === "divider_quote" && entry.isIntersecting && !hasTyped) {
        hasTyped = true;
        typeWriter();
      }

      if (element.id === "blog_info" && entry.isIntersecting && !hasTyped) {
        hasTyped = true;
        typeWriter();
      }

      if (element.classList.contains("blog_info") && entry.isIntersecting) {
        element.classList.add("show");
        observer.unobserve(element);
      }
      if (element.classList.contains("blog_image") && entry.isIntersecting) {
        element.classList.add("show");
        observer.unobserve(element);
      }
      if (element.classList.contains("blog_news") && entry.isIntersecting) {
        element.classList.add("show");
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(aboutText);
  aboutCard.forEach(card => observer.observe(card));
  observer.observe(menuImage);
  observer.observe(menuTitle);
  observer.observe(menuDesc);
  observer.observe(menuBtn);
  observer.observe(typingText);
  observer.observe(typingText3);
  observer.observe(blogInfo);
  observer.observe(blogImage);
  observer.observe(blogNews);
}
