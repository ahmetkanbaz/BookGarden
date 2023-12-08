import { Link } from "react-router-dom";
import { GiBookAura } from "react-icons/gi";
import {CustomNavbar} from './HeaderStyle'

const Header = () => {
  return (
    <CustomNavbar className="navbar navbar-expand-lg py-3 sticky-top">
  <div className="container">
    <Link className="navbar-brand d-flex align-items-center gap-2 fs-3" to='/'><GiBookAura />BookGarden</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bookGardenNavbar" aria-controls="bookGardenNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="bookGardenNavbar">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='allbooks'>All Books</Link>
        </li>
      </ul>
    </div>
  </div>
</CustomNavbar>
  )
}

export default Header