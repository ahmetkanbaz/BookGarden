import { Link } from "react-router-dom";
import { GiBookAura } from "react-icons/gi";
import { CustomNavbar } from "./HeaderStyle";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/slices/theme/themeSlice";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleChangeThemeMode = (e) => {
    if (theme == "light") {
      dispatch(setTheme("dark"));
      localStorage.setItem("bookGardenTheme", JSON.stringify("dark"));
    } else {
      dispatch(setTheme("light"));
      localStorage.setItem("bookGardenTheme", JSON.stringify("light"));
    }
    e.preventDefault();
  };

  return (
    <CustomNavbar
      className="navbar navbar-expand-lg py-3 sticky-top border-bottom"
      theme={theme}
    >
      <div className="container">
        <Link
          className="navbar-brand d-flex align-items-center gap-2 fs-3"
          to="/"
        >
          <GiBookAura />
          BookGarden
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#bookGardenNavbar"
          aria-controls="bookGardenNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="bookGardenNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex align-items-center">
              <a
                href="#"
                onClick={(e) => handleChangeThemeMode(e)}
                className="nav-link d-flex align-items-center"
              >
                {theme == "light" ? <BsMoonFill /> : <BsSunFill />}
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="allbooks">
                All Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="addbook">
                Add Book
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </CustomNavbar>
  );
};

export default Header;
