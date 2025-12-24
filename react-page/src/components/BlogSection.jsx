import { useState } from "react";



const blogPosts = [
  {
    id: 1,
    title: "Behind Our Autumn Menu",
    image: "/photos/truffle.jpg",
    preview: "Chef Luca reveals the secrets of truffle season...",
    fullText: `
Chef Luca reveals the secrets of truffle season from selecting the finest local varieties
to crafting dishes that capture their earthy aroma. Our autumn menu begins deep in the
forests of Italy, where truffles are carefully harvested at peak maturity. Each ingredient is thoughtfully paired to enhance—not overpower—the truffle’s natural
richness. From handmade pasta to slow-cooked sauces, every plate reflects a balance
between tradition and creativity. This season, we invite you to experience flavors that
celebrate patience, craftsmanship, and respect for nature.
    `,
    author: "IlSogno",
    year: 2025,
  },
  {
    id: 2,
    title: "Italian Desserts Secrets",
    image: "/photos/sogno-dessert.png",
    preview: "Discover the magic behind our classic desserts...",
    fullText: `
Discover the magic behind our classic tiramisu and panna cotta, crafted with love and
authentic Italian ingredients. Our desserts are inspired by family recipes passed down
through generations, refined with modern techniques. From the delicate balance of mascarpone and espresso to the silky smooth texture of panna
cotta, every dessert tells a story. We believe sweetness should comfort, surprise, and
leave a lasting memory long after the final bite.
    `,
    author: "IlSogno",
    year: 2025,
  },
  {
    id: 3,
    title: "The Art of Homemade Pasta",
    image: "/photos/sogno-pasta.png",
    preview: "Pasta at Il Sogno is more than food...",
    fullText: `
At Il Sogno, pasta is more than just a meal—it is a ritual. We begin with premium durum
wheat flour, fresh eggs, and time. Each dough is kneaded by hand, rested carefully, and
shaped with intention. Whether it’s tagliatelle, ravioli, or pappardelle, every strand is crafted to hold sauce
perfectly. This dedication transforms simple ingredients into something extraordinary,
honoring Italy’s culinary heritage one plate at a time.
    `,
    author: "IlSogno",
    year: 2025,
  },
  {
    id: 4,
    title: "Seasonal Ingredients Guide",
    image: "/photos/sogno-ingredients.png",
    preview: "How we choose fresh seasonal ingredients...",
    fullText: `
Great cooking begins with great ingredients. At Il Sogno, we work closely with local
farmers and trusted suppliers to source produce at its seasonal peak. By respecting nature’s rhythm, we ensure freshness, sustainability, and superior flavor.
This philosophy allows each dish to reflect the time of year—vibrant in summer, rich in
autumn, and comforting in winter. Seasonal cooking is not a trend for us; it is a promise.
    `,
    author: "IlSogno",
    year: 2025,
  },
];


const BlogItem = ({ title, image, preview, fullText, author, year }) => {
  const [isOpen, setIsOpen] = useState(false);{/*state*/}

  return (
    <article className="blog-item">
      <h1 className="blog-title">{title}</h1>

    <div className="blog-image-container">
      <img src={image} alt={title} className="blog-image" />
    </div>
   
      <div className="blog-paragraph">
        <p>{preview}</p>
      </div>

      <div className={`blog-paragraph full-text ${isOpen ? "open" : ""}`}>{/*nese isOpen o true ja qet klasen isOpen*/}
  <p>{fullText}</p>
</div>

      

      <div className="blog-footer">
        <button
          className="btn-read-more"
          onClick={() => setIsOpen(!isOpen)}>{/*kur te klikon e toggle isOpen*/}
      
          {isOpen ? "Read Less" : "Read More"}{/*nese o qel nbuton shkruhet read less e kunderta read more*/}
        </button>

        <p>
          {author}, {year}
        </p>
      </div>
    </article>
  );
};


const BlogSection = () => {
  return (
    <div className="content-wrapper">
      <section className="blog-section">
        {blogPosts.map((post) => (
          <BlogItem
            key={post.id}
            title={post.title}
            image={post.image}
            preview={post.preview}
            fullText={post.fullText}
            author={post.author}
            year={post.year}
          />
        ))}
      </section>
    </div>
  );
};

export default BlogSection;
