/* eslint-disable react/prop-types */
import FormError from '../../../common/FormError/FormError'
const UpdateTitleProduction = ({
  handleChange,
  handleBlur,
  values,
  isSubmitting,
  errors,
  touched
}) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6 mb-4 position-relative">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={values.title}
          placeholder="Enter the name you want the book to be updated with..."
          disabled={isSubmitting}
        />
        {errors.title && touched.title && <FormError message={errors.title}/>}
      </div>
      <div className="col-md-6 mb-4 position-relative">
        <label htmlFor="production" className="form-label">
          Book Publishing House
        </label>
        <input
          type="text"
          className="form-control"
          id="production"
          name="production"
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={values.production}
          placeholder="Enter the Book Publisher you want the book to update to..."
          disabled={isSubmitting}
        />
        {errors.production && touched.production && <FormError message={errors.production}/>}
      </div>
    </div>
  );
};

export default UpdateTitleProduction;
