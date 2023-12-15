/* eslint-disable react/prop-types */
const DetailBookImage = ({ imageSrc, title, author }) => {
  return (
    <div className="col-md-4 col-12">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <img src={imageSrc} alt={title} className="img-fluid rounded" />
      </div>
      {author && (
        <div className="d-flex align-items-center justify-content-center">
          Author Name: <span className="ms-2 fw-semibold fs-4">{author}</span>
        </div>
      )}
    </div>
  );
};

export default DetailBookImage;
