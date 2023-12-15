/* eslint-disable react/prop-types */
const UpdateTitleProduction = ({
  handleChange,
  handleBlur,
  values,
  isSubmitting,
}) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6 mb-3">
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
      </div>
      <div className="col-md-6 mb-3">
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
      </div>
    </div>
  );
};

export default UpdateTitleProduction;
