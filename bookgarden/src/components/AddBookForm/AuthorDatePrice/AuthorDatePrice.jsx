/* eslint-disable react/prop-types */
import FormError from "../../../common/FormError/FormError";

const AuthorDatePrice = ({
  handleChange,
  handleBlur,
  values,
  isSubmitting,
  errors,
  touched
}) => {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-md-4">
        <div className="mb-4 position-relative">
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
          {errors.author && touched.author && <FormError message={errors.author}/>}
        </div>
      </div>
      <div className="col-md-4">
        <div className="mb-4 position-relative">
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
          {errors.date && touched.date && <FormError message={errors.date}/>}
        </div>
      </div>
      <div className="col-md-4">
        <div className="mb-4 position-relative">
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
          {errors.price && touched.price && <FormError message={errors.price}/>}
        </div>
      </div>
    </div>
  );
};

export default AuthorDatePrice;
