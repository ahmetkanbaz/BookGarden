/* eslint-disable react/prop-types */
import FormError from "../../../common/FormError/FormError";

const UpdateAuthorDatePrice = ({
  handleChange,
  handleBlur,
  values,
  isSubmitting,
  errors,
  touched
}) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-4 mb-4 position-relative">
        <label htmlFor="author" className="form-label">
          Author
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          name="author"
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={values.author}
          disabled={isSubmitting}
          placeholder="Enter the author of the book..."
        />
        {errors.author && touched.author && <FormError message={errors.author}/>}
      </div>
      <div className="col-md-4 mb-4 position-relative">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={values.date}
          disabled={isSubmitting}
          placeholder="Enter the date of the book..."
        />
        {errors.date && touched.date && <FormError message={errors.date}/>}
      </div>
      <div className="col-md-4 mb-4 position-relative">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={values.price}
          disabled={isSubmitting}
          placeholder="Enter the price of the book..."
        />
        {errors.price && touched.price && <FormError message={errors.price}/>}
      </div>
    </div>
  );
};

export default UpdateAuthorDatePrice;
