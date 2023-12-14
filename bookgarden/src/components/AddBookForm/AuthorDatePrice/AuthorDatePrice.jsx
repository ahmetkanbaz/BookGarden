/* eslint-disable react/prop-types */

const AuthorDatePrice = ({
  handleChange,
  handleBlur,
  values,
  isSubmitting,
}) => {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-md-4">
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Book Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            placeholder="Enter the author of the book..."
            value={values.author}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className="col-md-4">
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Book Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className="col-md-4">
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            placeholder="Enter the price of the book..."
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorDatePrice;
