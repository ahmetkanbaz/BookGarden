import Button from "../../../common/Button/Button";

/* eslint-disable react/prop-types */
const DetailBookInfos = ({ date, title, summary, price, production, src }) => {
  const formattedDate = new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const styleButton = {
    bordervalue: "1px solid #333333",
    buttonClassName: "rounded-pill",
    textcolor: "#FFFFFF",
    buttonpadding: ".5rem 1.5rem",
    buttonType: "button",
  };
  return (
    <div className="col-md-8 col-12">
      {date && (
        <p className="text-end fst-italic mt-md-0 mt-4">
          Date: <span className="ms-2">{formattedDate}</span>
        </p>
      )}
      {title && <h3 className="text-center mb-3">{title}</h3>}

      {summary && (
        <div className="py-4">
          {summary.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}

      {price && (
        <div className="py-4 d-flex align-items-center justify-content-end">
          Price: <span className="fs-3 ms-2 fst-italic">{price}</span><span className="fs-4 fst-italic">$</span>
        </div>
      )}

      {production && (
        <div className="border-top py-3 d-flex justify-content-center">
          Production: <span className="ms-2">{production}</span>
        </div>
      )}

      {src && (
        <div className="d-flex justify-content-around">
          <Button
            title="Go to Site"
            backgroundcolor="#C27B7F"
            hoverbackgroundcolor="#C47562"
            buttonOnClick={() => window.open(src, "_blank")}
            {...styleButton}
          />
          <Button
            backgroundcolor="#FFA192"
            hoverbackgroundcolor="#FF7F6B"
            textcolor="#FFFFFF"
            title="Update Book"
            dataBsToggle="modal"
            dataBsTarget="#updateBookModal"
            {...styleButton}
          />
        </div>
      )}
    </div>
  );
};

export default DetailBookInfos;
