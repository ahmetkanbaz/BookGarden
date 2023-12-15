import BooksWrapper from "../../common/BooksWrapper/BooksWrapper";
import UpperSection from "../../common/UpperSection/UpperSection";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllBooks } from "../../utils/requests";
import FilterItems from "../../components/FilterItems/FilterItems";

const AllBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const [filteredBooks, setFilteredBooks] = useState(books);

  const [search, setSearch] = useState();
  const [sort, setSort] = useState();

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  useEffect(() => {
    let tempBooks = [...books];

    if (search) {
      tempBooks = tempBooks.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase().trim())
      );
    }

    if (sort) {
      switch (sort) {
        case "sorta_z":
          tempBooks = tempBooks.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "sortz_a":
          tempBooks = tempBooks.sort((a, b) => b.title.localeCompare(a.title));
          break;
      }
    }

    setFilteredBooks(tempBooks);
  }, [search, sort]);
  return (
    <section className="py-5">
      <div className="container">
        <UpperSection title="All Books" />
        <FilterItems setSearch={setSearch} setSort={setSort} />
        <BooksWrapper books={filteredBooks} />
      </div>
    </section>
  );
};

export default AllBooks;
