import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleBook } from "../../utils/requests";
import Loading from "../../common/Loading/Loading";
import DangerAlert from "../../common/DangerAlert/DangerAlert";
import DetailBookImage from "../../components/DetailBookWrapper/DetailBookImage/DetailBookImage";
import DetailBookInfos from "../../components/DetailBookWrapper/DetailBookInfos/DetailBookInfos";
import UpdateModal from "../../components/UpdateModal/UpdateModal";

const DetailBook = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState();
  const [singleBook, setSingleBook] = useState({});

  const getBookValues = async () => {
    setLoading(true);
    const response = await getSingleBook(id);
    setSingleBook(response);
    setLoading(false);
  };

  useEffect(() => {
    getBookValues();
  }, []);

  const { title, production, author, summary, price, date, imageSrc, src } =
    singleBook || {};
  
  console.log(singleBook)

  if (loading) {
    return <Loading />;
  }

  if (singleBook.message) {
    return (
      <DangerAlert
        title={`The book with ID ${id} was not found in the database.`}
      />
    );
  }
  return (
    <section className="py-5">
      <div className="container">
        <div className="row mt-4">
          <DetailBookImage imageSrc={imageSrc} title={title} author={author} />
          <DetailBookInfos
            date={date}
            title={title}
            summary={summary}
            price={price}
            src={src}
            production={production}
          />
        </div>
        <UpdateModal book={singleBook} setSingleBook = {setSingleBook}/>
      </div>
    </section>
  );
};

export default DetailBook;
