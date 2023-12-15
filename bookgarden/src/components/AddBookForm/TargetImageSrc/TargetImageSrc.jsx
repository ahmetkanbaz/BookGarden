/* eslint-disable react/prop-types */
import FormError from "../../../common/FormError/FormError";

const TargetImageSrc = ({ handleChange, handleBlur, values, isSubmitting, errors, touched }) => {
  return (
    <div>
      <div className="mb-4 position-relative">
        <label htmlFor="imageSrc" className="form-label">
          Book Photo
        </label>
        <input
          type="text"
          id="imageSrc"
          name="imageSrc"
          className="form-control"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.imageSrc}
          disabled={isSubmitting}
          placeholder="Enter the photo of the book..."
        />
        {errors.imageSrc && touched.imageSrc && <FormError message={errors.imageSrc}/>}
      </div>
      <div className="mb-4 position-relative">
        <label htmlFor="src" className="form-label">
          Book Link
        </label>
        <input
          type="url"
          id="src"
          name="src"
          className="form-control"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.src}
          disabled={isSubmitting}
          placeholder="Enter the link of the book..."
        />
        {errors.src && touched.src && <FormError message={errors.src}/>}
      </div>
    </div>
  );
};

export default TargetImageSrc;
