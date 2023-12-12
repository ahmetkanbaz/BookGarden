/* eslint-disable react/prop-types */
import Button from "../../../common/Button/Button";

const FormButtons = ({ handleReset }) => {
  const buttonStyle = {
    bordervalue: "none",
    buttonClassName: "rounded-pill",
    textcolor: "#FFFFFF",
    buttonpadding: ".4rem 1.4rem",
    hovertextcolor: "#000000",
  };
  return (
    <div className="d-flex align-items-center justify-content-end gap-2">
      <Button
        title="Add Book"
        backgroundcolor="#C27B7F"
        hoverbackgroundcolor="#8B6785"
        buttonType="submit"
        {...buttonStyle}
      />
      <Button
        title="Reset Form"
        backgroundcolor="#8B6785"
        hoverbackgroundcolor="#C27B7F"
        buttonOnClick={handleReset}
        buttonType="button"
        {...buttonStyle}
      />
    </div>
  );
};

export default FormButtons;
