/* eslint-disable react/prop-types */
const TargetImageSrc = ({ handleChange, handleBlur, values, isSubmitting }) => {
  return (
    <div>
      <div className="mb-3">
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
      </div>
      <div className="mb-3">
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
      </div>
    </div>
  );
};

export default TargetImageSrc;
