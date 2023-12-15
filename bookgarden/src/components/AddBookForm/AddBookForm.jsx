/* eslint-disable react/prop-types */
import TitleProduction from "./TitleProduction/TitleProduction";
import AuthorDatePrice from "./AuthorDatePrice/AuthorDatePrice";
import FormButtons from "./FormButtons/FormButtons";
import TargetImageSrc from "./TargetImageSrc/TargetImageSrc";
import FormError from '../../common/FormError/FormError'

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
        errors = {errors}
        touched = {touched}
      />

      <AuthorDatePrice
        handleChange={handleChange}
        handleBlur={handleBlur}
        values={values}
        isSubmitting={isSubmitting}
        errors = {errors}
        touched = {touched}
      />

      <div className="mb-4 position-relative">
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
        {errors.summary && touched.summary && <FormError message={errors.summary}/>}
      </div>

      <TargetImageSrc
        handleChange={handleChange}
        handleBlur={handleBlur}
        values={values}
        isSubmitting={isSubmitting}
        errors = {errors}
        touched = {touched}
      />

      <FormButtons handleReset={handleReset} />
    </form>
  );
};

export default AddBookForm;
