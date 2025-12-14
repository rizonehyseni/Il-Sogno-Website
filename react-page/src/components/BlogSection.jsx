const blogPosts = [
  {
    id: 1,
    title: "Behind Our Autumn Menu",
    image: "/photos/sogno5.png",
    text: "Chef Luca reveals the secrets of truffle season from selecting the finest local varieties to crafting dishes that capture their earthy aroma.",
    author: "IlSogno",
    year: 2025,
  },
  {
    id: 2,
    title: "Why Fresh Herbs Matter",
    image: "/photos/sogno5.png",
    text: "Fresh herbs elevate every dish with vibrant aromas, textures, and flavors you simply can’t replicate.",
    author: "IlSogno",
    year: 2025,
  },
  {
    id: 3,
    title: "Inside Our Kitchen",
    image: "/photos/sogno5.png",
    text: "A behind-the-scenes look at how passion, teamwork, and tradition come together every night.",
    author: "IlSogno",
    year: 2025,
  },
];



const BlogItem = ({ title, image, text, author, year }) => {
  return (
    <article className="blog-item">
      <h1 className="blog-title">{title}</h1>

      <img src={image} className="blog-image" alt={title} />

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