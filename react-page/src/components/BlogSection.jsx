const blogPosts = [
  {
    id: 1,
    title: "Behind Our Autumn Menu",
    image: "/photos/truffle.jpg",
    text: "Chef Luca reveals the secrets of truffle season from selecting the finest local varieties to crafting dishes that capture their earthy aroma.",
    author: "IlSogno",
    year: 2025,
  },
  {
    id: 2,
    title: "Italian Desserts Secrets",
    image: "/photos/sogno-dessert.png",
    text: "Chef Luca reveals the secrets of truffle season from selecting the finest local varieties to crafting dishes that capture their earthy aroma.",
    author: "IlSogno",
    year: 2025,
  },
  {
    id: 3,
    title: "The Art of Homemade Pasta",
    image: "/photos/sogno-pasta.png",
    text: "At Il Sogno, we believe that pasta is more than just food—it's an art form. From carefully selecting the finest durum wheat to hand-rolling each noodle, every step is infused with passion.",
    author: "IlSogno",
    year: 2025,
  },
  {
    id:4,
    title:"Seasonal Ingredients Guide",
    image:"/photos/sogno-ingredients.png",
    text: "Learn how we choose the freshest, locally sourced ingredients to make every dish memorable and flavorful.",
    author: "IlSogno",
    year: 2025,

  }
];



  

const BlogItem = ({ title, image, text, author, year }) => {
  return (
    <article className="blog-item">
      <h1 className="blog-title">{title}</h1>

      <div className="blog-image-container">
      <img src={image} className="blog-image" alt={title} />
      </div>

      <div className="blog-paragraph">
        <p>{text}</p>
      </div>

      <div className="blog-footer">
        <button
          className="btn-read-more"
          onClick={() => (window.location.href = "about.html")}
        >
          Read More
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
            text={post.text}
            author={post.author}
            year={post.year}
          />
        ))}
      </section>
    </div>
  );
};

export default BlogSection;