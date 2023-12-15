import SingleBlog from "./SingleBlog/SingleBlog";

const Blogs = () => {
  const allBlogs = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/front-view-stacked-books-ladders-education-day_23-2149241046.jpg?size=626&ext=jpg",
      src: "https://pagesunbound.wordpress.com/",
    },
    {
      id: "2",
      image:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?size=626&ext=jpg",
      src: "https://booknerdection.com/good-grooming-and-a-healthy-respect-for-authority-by-mark-paxson/",
    },
    {
      id: "3",
      image:
        "https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg?size=626&ext=jpg",
      src: "https://booknerdection.com/the-walk-in-by-leslie-rains-a-criminal-thriller-and-a-ghost-story-to-boot/",
    },
    {
      id: "4",
      image:
        "https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5924.jpg?size=626&ext=jpg&ga=GA1.1.1566543080.1702660769&semt=sph",
      src: "https://booknerdection.com/through-the-never-a-thriller-read-by-j-f-newman/",
    },
  ];
  return (
    <section className="py-5">
      <div className="container">
        <h4 className="text-center">Blogs</h4>
        <div className="row align-items-center g-5 mt-1">
          {allBlogs.map((blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
