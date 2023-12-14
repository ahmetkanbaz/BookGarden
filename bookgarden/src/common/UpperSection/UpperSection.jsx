import PropTypes from "prop-types";

const UpperSection = ({ title }) => {
  return (
    <div className="pb-4">
      <h2 className="fw-bold">{title}</h2>
    </div>
  );
};

UpperSection.propTypes = {
  title: PropTypes.string,
};

export default UpperSection;
