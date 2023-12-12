/* eslint-disable react/prop-types */
import Button from "../../../common/Button/Button";

const FormButtons = ({ handleReset }) => {
  return (
    <div className="d-flex align-items-center justify-content-end">
      <Button
        title="Reset Form"
        backgroundcolor="red"
        buttonOnClick={handleReset}
        bordervalue="1px solid #000000"
        buttonClassName="rounded-pill"
        buttonpadding='.7rem 1.4rem'
      />
    </div>
  );
};

export default FormButtons;
