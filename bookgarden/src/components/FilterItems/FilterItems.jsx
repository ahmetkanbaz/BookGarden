/* eslint-disable react/prop-types */
const FilterItems = ({setSearch}) => {

  const handleSearchBook = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="pb-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-sm-6 col-12">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Sort Books
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#" className="dropdown-item">
                    A - Z
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    Z - A
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-12">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Search by book name..."
              onChange={(e) => handleSearchBook(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterItems;
