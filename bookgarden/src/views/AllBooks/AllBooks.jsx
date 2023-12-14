import BooksWrapper from "../../common/BooksWrapper/BooksWrapper";
import UpperSection from "../../common/UpperSection/UpperSection";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react";
import { getAllBooks } from "../../utils/requests";

const AllBooks = () => {
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books.books)

  useEffect(() => {
    dispatch(getAllBooks())
  }, [])
  return (
    <section className="py-5">
      <div className="container">
        <UpperSection title="All Books" />
        <BooksWrapper books={books} />
      </div>
    </section>
  );
};

export default AllBooks;
