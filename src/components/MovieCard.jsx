export const MovieCard = ({ movie }) => {

  // When the component is used it returns a card for displaying information about the movie.
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-card-text-content">
        <h2>{movie.title}</h2>
        <p>Release date: {movie.release_date}</p>
      </div>
    </div>
  );
};
