import PropTypes from "prop-types";
import { CustomCard } from "./CardStyle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Card = ({ movie }) => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.theme)
  const { id, imageSrc, title, summary, date } = movie || {};

  const newDate = new Date(date)

  const formattedDate = newDate.toLocaleDateString('tr-TR', { day: 'numeric', month: 'numeric', year: 'numeric' });

  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
      <CustomCard className="card h-100 rounded-2 position-relative" theme={theme}>
        <div onClick={() => navigate(`/allbooks/${id}`)}>
          <img src={imageSrc} className="card-img-top rounded-top-2" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{summary}</p>
          </div>
          <div className="card-footer text-center">{formattedDate}</div>
        </div>
      </CustomCard>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object,
};

export default Card;
