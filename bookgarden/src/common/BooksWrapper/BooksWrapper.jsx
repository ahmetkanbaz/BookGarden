/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import DangerAlert from "../DangerAlert/DangerAlert";
const BooksWrapper = ({ books }) => {
  return (
    <div className="row align-items-center justify-content-center g-3">
      {books.length > 0 ? (
        books.map((book) => <Card key={book.id} movie={book} />)
      ) : (
        <DangerAlert title='Books not found!'/>
      )}
    </div>
  );
};

export default BooksWrapper;
