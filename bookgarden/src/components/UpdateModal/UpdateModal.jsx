/* eslint-disable react/prop-types */
import { UpdateModalWrapper } from "./UpdateModalStyle";
import { useSelector } from "react-redux";

const UpdateModal = ({ book }) => {
  const theme = useSelector((state) => state.theme.theme);
  const { title, production, summary, date, author, price, imageSrc, src } =
    book || {};

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
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
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
