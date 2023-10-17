
export const Movie = ({ movie }) => {

    const backgroundMovieGrid = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie.poster_path})`,
        ariaLabel: movie.title,
    }

    return(
        <div className="movie-item" style={backgroundMovieGrid}>
            <h2>{movie.title}</h2>
            {/*{movie.original_title}*/}
            {movie.release_date}
          { /* <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />*/}
        </div>
    )
}