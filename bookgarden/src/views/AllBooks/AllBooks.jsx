import BooksWrapper from "../../common/BooksWrapper/BooksWrapper";
import UpperSection from "../../common/UpperSection/UpperSection";
import {useSelector} from 'react-redux'

const AllBooks = () => {
  const books = useSelector((state) => state.books.books)
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
