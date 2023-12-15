import Button from "../../../common/Button/Button";

/* eslint-disable react/prop-types */
const DetailBookInfos = ({ date, title, summary, production, src }) => {
  const formattedDate = new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
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

      {production && (
        <div className="border-top py-3 d-flex justify-content-center">
          Production: <span className="ms-2">{production}</span>
        </div>
      )}

      {src && (
        <div className="d-flex justify-content-md-end justify-content-center">
          <Button
            title="Go to Site"
            backgroundcolor="#C27B7F"
            borderradius="12px"
            bordervalue="none"
            textcolor="#FFFFFF"
            buttonpadding=".63rem 1.8rem"
            hoverbackgroundcolor="#C47562"
            buttonOnClick={() => window.open(src, "_blank")}
            buttonType="button"
          ></Button>
        </div>
      )}
    </div>
  );
};

export default DetailBookInfos;
