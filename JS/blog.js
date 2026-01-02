document.addEventListener("DOMContentLoaded", function () {
  const text = `Welcome to Il Sogno, where every dish is crafted with passion, bringing the true flavors of Italy straight to your table.
Join us and savor moments made memorable.`;
  
  const typingText = document.getElementById("hero-title");

  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 20);
    }
  }

  typeWriter(); 

  const blogPosts = [
    {
        img: "/photos/truffle.jpg",
        title: "Behind Our Autumn Menu",
        preview: "Chef Luca reveals the secrets of truffle season...",
        fullText: `
            Chef Luca reveals the secrets of truffle season from selecting the finest local varieties
            to crafting dishes that capture their earthy aroma. Our autumn menu begins deep in the
            forests of Italy, where truffles are carefully harvested at peak maturity.

            Each ingredient is thoughtfully paired to enhance—not overpower—the truffle’s natural
            richness. From handmade pasta to slow-cooked sauces, every plate reflects a balance
            between tradition and creativity. This season, we invite you to experience flavors that
            celebrate patience, craftsmanship, and respect for nature.
          `,
        author: "IlSogno",
        year: 2025
    },
    {
        img: "/photos/sogno-dessert.png",
        title: "Italian Desserts Secrets",
        preview: "Discover the magic behind our classic desserts...",
        fullText: `
            Discover the magic behind our classic tiramisu and panna cotta, crafted with love and
            authentic Italian ingredients. Our desserts are inspired by family recipes passed down
            through generations, refined with modern techniques.

            From the delicate balance of mascarpone and espresso to the silky smooth texture of panna
            cotta, every dessert tells a story. We believe sweetness should comfort, surprise, and
            leave a lasting memory long after the final bite.
          `,
        author: "IlSogno",
        year: 2025
    },
    { 
        img: "/photos/sogno-pasta.png",
        title: "The Art of Homemade Pasta",
        preview: "Pasta at Il Sogno is more than food...",
        fullText: `
            At Il Sogno, pasta is more than just a meal—it is a ritual. We begin with premium durum
            wheat flour, fresh eggs, and time. Each dough is kneaded by hand, rested carefully, and
            shaped with intention.

            Whether it’s tagliatelle, ravioli, or pappardelle, every strand is crafted to hold sauce
            perfectly. This dedication transforms simple ingredients into something extraordinary,
            honoring Italy’s culinary heritage one plate at a time.
          `,
        author: "IlSogno",
        year: 2025
    },
    {
        img: "/photos/sogno-ingredients.png",
        title: "Seasonal Ingredients Guide",
        preview: "How we choose fresh seasonal ingredients...",
        fullText: `
            Great cooking begins with great ingredients. At Il Sogno, we work closely with local
            farmers and trusted suppliers to source produce at its seasonal peak.

            By respecting nature’s rhythm, we ensure freshness, sustainability, and superior flavor.
            This philosophy allows each dish to reflect the time of year—vibrant in summer, rich in
            autumn, and comforting in winter. Seasonal cooking is not a trend for us; it is a promise.
          `,
        author: "IlSogno",
        year: 2025
    }
];

  function toggleDescription(button, fullTextElement) {
    const isOpen = fullTextElement.classList.contains("show");

    if (isOpen) {
      fullTextElement.classList.remove("show");
      button.textContent = "Read More";
    } else {
      fullTextElement.classList.add("show");
      button.textContent = "Read Less";
    }
  }

const container = document.getElementById("blog-cards-container");

const blogCards = blogPosts.map(post => {
    const card = document.createElement("div");
    card.classList.add("blog-card");

    card.innerHTML = `
        <h2>${post.title}</h2>
        <img src="${post.img}" alt="${post.title}">
        <p class="preview-text">${post.preview}</p>
        <p class="full-text">${post.fullText}</p>

          <div class="blog-footer">
            <button class="btn-read-more">
                Read More
            </button>
            <p>By ${post.author}, ${post.year}</p>
          </div>`
        ;

    const button = card.querySelector(".btn-read-more");
    const fullText = card.querySelector(".full-text");

    button.addEventListener("click", () => {
      toggleDescription(button, fullText);
    });

    return card;
});
 container.append(...blogCards);

const form = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (email === "") {
        alert("Please enter your email.");
        return;
    }

     const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(email)){ 
        alert("Please enter a valid email.");
        return;
    }
    alert("Thank you for subscribing!");
    form.reset();
});

});