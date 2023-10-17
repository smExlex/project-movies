
export const Movie = ({ movie }) => {

   

    return(
        <div className="movie-item" >
            <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            {/*{movie.original_title}*/}
            {movie.release_date}   
        </div>
    )
}