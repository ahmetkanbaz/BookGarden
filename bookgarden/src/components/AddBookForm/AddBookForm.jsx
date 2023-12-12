/* eslint-disable react/prop-types */

import FormButtons from "./FormButtons/FormButtons";
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
      
      <FormButtons
        handleReset = {handleReset}
      />
    </form>
  );
};

export default AddBookForm;
