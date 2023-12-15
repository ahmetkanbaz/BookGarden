import HomeBanner from "../../components/HomeBanner/HomeBanner";
import {useDispatch, useSelector} from 'react-redux'
import UpperSection from '../../common/UpperSection/UpperSection'
import BooksWrapper from "../../common/BooksWrapper/BooksWrapper";
import {useEffect} from 'react'
import { getAllBooks } from "../../utils/requests";
import AboutAuthor from "../../components/AboutAuthor/AboutAuthor";

const Home = () => {
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books.books)

  const latestBooks = [...books].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6)

  useEffect(() => {
    dispatch(getAllBooks())
  }, [])
  
  return (
    <>
      <HomeBanner />
      <section className="py-5">
        <div className="container">
          <UpperSection title='Latest Books' />
          <BooksWrapper books={latestBooks} />
        </div>
      </section>
      <AboutAuthor />
    </>
  );
};

export default Home;
