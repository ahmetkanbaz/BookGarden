/* eslint-disable react/prop-types */
import FormError from "../../../common/FormError/FormError";

const SummaryTargetImageSrc = ({
  handleChange,
  handleBlur,
  values,
  isSubmitting,
  errors,
  touched
}) => {
  return (
    <div>
      <div className="mb-4 position-relative">
        <label htmlFor="summary" className="form-label">
          Summary
        </label>
        <textarea
          id="summary"
          name="summary"
          rows="10"
          className="form-control"
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={values.summary}
          disabled={isSubmitting}
          placeholder="Enter the summary of the book..."
        />
        {errors.summary && touched.summary && <FormError message={errors.summary}/>}
      </div>

      <div className="mb-4 position-relative">
        <label htmlFor="imageSrc" className="form-label">
          Photo Link
        </label>
        <input
          type="text"
          className="form-control"
          id="imageSrc"
          name="imageSrc"
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={values.imageSrc}
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
          className="form-control"
          id="src"
          name="src"
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={values.src}
          disabled={isSubmitting}
          placeholder="Enter the link of the book..."
        />
        {errors.src && touched.src && <FormError message={errors.src}/>}
      </div>
    </div>
  );
};

export default SummaryTargetImageSrc;
