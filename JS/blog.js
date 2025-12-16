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
        img: "/photos/sogno-truffle.png",
        title: "Behind Our Autumn Menu",
        text: "Chef Luca reveals the secrets of truffle season from selecting the finest local varieties to crafting dishes that capture their earthy aroma."
    },
    {
        img: "/photos/sogno-dessert.png",
        title: "Italian Desserts Secrets",
        text: "Discover the magic behind our classic tiramisu and panna cotta, crafted with love and authentic Italian ingredients."
    },
    { 
        img: "/photos/sogno-pasta.png",
        title: "The Art of Homemade Pasta",
        text: "At Il Sogno, we believe that pasta is more than just food—it's an art form. From carefully selecting the finest durum wheat to hand-rolling each noodle, every step is infused with passion."
    },
    {
        img: "/photos/sogno-ingredients.png",
        title: "Seasonal Ingredients Guide",
        text: "Learn how we choose the freshest, locally sourced ingredients to make every dish memorable and flavorful."
    }
];

const container = document.getElementById("blog-cards-container");

blogPosts.forEach(post => {
    const card = document.createElement("div");
    card.classList.add("blog-card");

    card.innerHTML = `
        <h1>${post.title}</h1>
        <img src="${post.img}" alt="${post.title}">
        <p>${post.text}</p>
    `;

    container.appendChild(card);
});

});