import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./routes/Router";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {setTheme} from './redux/slices/theme/themeSlice'

function App() {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.theme)

  const getTheme = () => {
    const localTheme = localStorage.getItem('bookGardenTheme')
    if (localTheme) {
      dispatch(setTheme(JSON.parse(localTheme)))
    }
    else {
      dispatch(setTheme('light'))
      localStorage.setItem('bookGardenTheme', JSON.stringify('light'))
    }
  }

  useEffect(() => {
    getTheme()
  }, [])


  return (
    <>
      <GlobalStyle theme={theme}/>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
