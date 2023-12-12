import { useFormik } from "formik";
import UpperSection from "../../common/UpperSection/UpperSection";
import TitleProduction from "../../components/AddBookForm/TitleProduction/TitleProduction";
import AddBookForm from "../../components/AddBookForm/AddBookForm";

const AddBook = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    handleReset,
    values,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      title: "",
      production: "",
      author: "",
      summary: "",
      date: "",
      price: "",
      imageSrc: "",
      src: "",
    },
    onSubmit: async (values, bag) => {
      await console.log(values);
      bag.setSubmitting(false);
      // bag.resetForm()
    },
  });
  return (
    <section className="py-5">
      <div className="container">
        <UpperSection title="Add New Book" />
        <AddBookForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleReset={handleReset}
          values={values}
          errors={errors}
          touched={touched}
          isSubmitting={isSubmitting}
        />
      </div>
    </section>
  );
};

export default AddBook;
