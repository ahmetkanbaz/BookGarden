/* eslint-disable react/prop-types */

import TitleProduction from "./TitleProduction/TitleProduction";

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
    </form>
  );
};

export default AddBookForm;
