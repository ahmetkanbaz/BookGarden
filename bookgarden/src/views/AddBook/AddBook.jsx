import { useFormik } from "formik";
import UpperSection from "../../common/UpperSection/UpperSection";
import AddBookForm from "../../components/AddBookForm/AddBookForm";
import { addNewBook } from "../../utils/posts";
import bookSchema from '../../schemas/bookSchema'

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
    validationSchema: bookSchema,
    onSubmit: async (values, bag) => {
      const response = await addNewBook(values)
      console.log(response)
      bag.setSubmitting(false);
      bag.resetForm()
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
