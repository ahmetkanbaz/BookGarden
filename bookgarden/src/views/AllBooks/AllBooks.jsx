import BooksWrapper from "../../common/BooksWrapper/BooksWrapper";
import UpperSection from "../../common/UpperSection/UpperSection";
import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from "react";
import { getAllBooks } from "../../utils/requests";
import FilterItems from "../../components/FilterItems/FilterItems";

const AllBooks = () => {
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books.books)

  const [filteredBooks, setFilteredBooks] = useState(books)

  const [search, setSearch] = useState()
  const [sort, setSort] = useState()

  useEffect(() => {
    dispatch(getAllBooks())
  }, [])

  useEffect(() => {
    let tempBooks = [...books]

    if (search) {
      tempBooks = tempBooks.filter((book) => book.title.toLowerCase().includes(search.toLowerCase().trim()))
    }

    setFilteredBooks(tempBooks)
  }, [search])
  return (
    <section className="py-5">
      <div className="container">
        <UpperSection title="All Books" />
        <FilterItems setSearch = {setSearch} />
        <BooksWrapper books={filteredBooks} />
      </div>
    </section>
  );
};

export default AllBooks;
