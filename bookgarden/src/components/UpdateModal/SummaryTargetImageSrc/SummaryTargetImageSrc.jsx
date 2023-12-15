/* eslint-disable react/prop-types */
const SummaryTargetImageSrc = ({
  handleChange,
  handleBlur,
  values,
  isSubmitting,
}) => {
  return (
    <div>
      <div className="mb-3">
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
      </div>

      <div className="mb-3">
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
      </div>
    </div>
  );
};

export default SummaryTargetImageSrc;
