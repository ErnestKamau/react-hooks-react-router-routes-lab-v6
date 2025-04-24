import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movies = [
  {
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"]
  },
  {
    id: 2,
    title: "Trolls",
    time: 92,
    genres: ["Animation", "Comedy", "Family"]
  }
];

export default function Movie() {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre) => (
        <span key={genre}>{genre}</span>
      ))}
    </>
  );
}

