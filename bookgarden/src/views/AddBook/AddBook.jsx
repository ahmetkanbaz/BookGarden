import { useFormik } from "formik";
import UpperSection from "../../common/UpperSection/UpperSection";
import TitleProduction from "../../components/AddBookForm/TitleProduction/TitleProduction";
import AddBookForm from "../../components/AddBookForm/AddBookForm";
import { addNewBook } from "../../utils/posts";

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
      const response = await addNewBook(values)
      console.log(response)
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
