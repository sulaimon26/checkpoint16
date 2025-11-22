export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} className="movie-img" />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <span className="rating">⭐ {movie.rating}</span>
      </div>
    </div>
  );
}
