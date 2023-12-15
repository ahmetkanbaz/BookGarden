/* eslint-disable react/prop-types */
import { UpdateModalWrapper } from "./UpdateModalStyle";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import UpdateTitleProduction from "./UpdateTitleProduction/UpdateTitleProduction";
import UpdateAuthorDatePrice from "./UpdateAuthorDatePrice/UpdateAuthorDatePrice";
import SummaryTargetImageSrc from "./SummaryTargetImageSrc/SummaryTargetImageSrc";
import { updateBook } from "../../utils/puts";
import { useParams } from "react-router-dom";

const UpdateModal = ({ book, setSingleBook }) => {
  const {id} = useParams()
  const theme = useSelector((state) => state.theme.theme);
  const { title, production, summary, date, author, price, imageSrc, src } =
    book || {};

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      title,
      production,
      summary,
      author,
      date,
      price,
      imageSrc,
      src,
    },
    onSubmit: async (values, bag) => {
      const response = await updateBook(id, values)
      if (response.status == 200 || response.status == 201) {
        setSingleBook(values)
      }
      else if (response.message) {
        console.log('An error was encountered during the update...')
      }
      else {
        console.log('The update could not be performed...')
      }
      bag.setSubmitting(false);
    },
  });

  return (
    <UpdateModalWrapper theme={theme}>
      <div
        className="modal fade"
        id="updateBookModal"
        tabIndex="-1"
        aria-labelledby="updateBookModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateBookModalLabel">
                Update Book
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <UpdateTitleProduction
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  isSubmitting={isSubmitting}
                />
                <UpdateAuthorDatePrice
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  isSubmitting={isSubmitting}
                />
                <SummaryTargetImageSrc
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  isSubmitting={isSubmitting}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </UpdateModalWrapper>
  );
};

export default UpdateModal;
