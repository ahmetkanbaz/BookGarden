/* eslint-disable react/prop-types */
import FormError from "../../../common/FormError/FormError";

const TitleProduction = ({
  handleChange,
  handleBlur,
  values,
  isSubmitting,
  errors,
  touched
}) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="mb-4 position-relative">
          <label htmlFor="title" className="form-label">
            Book Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter the title of the book..."
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
          />
          {errors.title && touched.title && <FormError message={errors.title}/>}
        </div>
      </div>
      <div className="col-md-6">
        <div className="mb-4 position-relative">
          <label htmlFor="production" className="form-label">
            Book Publishing House
          </label>
          <input
            type="text"
            className="form-control"
            id="production"
            name="production"
            placeholder="Enter the book publishing house..."
            value={values.production}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
          />
          {errors.production && touched.production && <FormError message={errors.production}/>}
        </div>
      </div>
    </div>
  );
};

export default TitleProduction;
