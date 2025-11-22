import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <div>
      {movies.map((m, i) => (
        <MovieCard key={i} movie={m} />
      ))}
    </div>
  );
}
