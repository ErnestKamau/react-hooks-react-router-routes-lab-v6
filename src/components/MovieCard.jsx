import { Link } from 'react-router-dom';

function MovieCard({ title }) {
  return (
    <article>
        <h2>{title.title}</h2> {/* Access the actual title string */}
        <Link to={`/movie/${title.id}`}>View Info</Link> {/* Access the ID */}
    </article>
  );
}

export default MovieCard;
