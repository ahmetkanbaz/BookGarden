/* eslint-disable react/prop-types */

const TitleProduction = ({
  handleChange,
  handleBlur,
  values,
  isSubmitting,
}) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="mb-3">
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
        </div>
      </div>
    </div>
  );
};

export default TitleProduction;
