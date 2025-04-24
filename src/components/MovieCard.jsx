import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MovieCard({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default MovieCard;