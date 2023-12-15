/* eslint-disable react/prop-types */
import TitleProduction from "./TitleProduction/TitleProduction";
import AuthorDatePrice from "./AuthorDatePrice/AuthorDatePrice";
import FormButtons from "./FormButtons/FormButtons";
import TargetImageSrc from "./TargetImageSrc/TargetImageSrc";

const AddBookForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  handleReset,
  values,
  errors,
  touched,
  isSubmitting,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <TitleProduction
        handleChange={handleChange}
        handleBlur={handleBlur}
        values={values}
        isSubmitting={isSubmitting}
      />

      <AuthorDatePrice
        handleChange={handleChange}
        handleBlur={handleBlur}
        values={values}
        isSubmitting={isSubmitting}
      />

      <div className="mb-3">
        <label htmlFor="summary" className="form-label">
          Summary
        </label>
        <textarea
          name="summary"
          id="summary"
          rows="7"
          className="form-control"
          value={values.summary}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter the summary of the book..."
          disabled={isSubmitting}
        />
      </div>

      <TargetImageSrc
        handleChange={handleChange}
        handleBlur={handleBlur}
        values={values}
        isSubmitting={isSubmitting}
      />

      <FormButtons handleReset={handleReset} />
    </form>
  );
};

export default AddBookForm;
