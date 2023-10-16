import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    //Här gör vi fetchen
    //display poster, titel, releasedate eller något annat! release_date
    //länkar till varje film

    const [movieList, setMovieList] = useState([])

    //declaring the movie API
    const API =
        "https://api.themoviedb.org/3/movie/upcoming?api_key=c7533a3f72d545439eb19302b76b29a4&language=en-US&";

    //creating a function to fetch the movie data
    const fetchMovies = async () => {
        try {
            const response = await fetch(API)

            if(!response.ok) {
                throw new Error("Failed to fetch movies")
            }
            const result = await response.json();
            console.log("result",result)
            setMovieList(result.results)
            
        } catch (error) {
            console.error("Error with fetch", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    console.log("movielist", movieList )

    return (
        <section className="movieList-section">
                {movieList.map((movie) => (
                    <Link className="singleMovie" key={movie.id} to="/moviedetails">
                        <h2>{movie.title}</h2>
                        {/*{movie.original_title}*/}
                        {movie.release_date}
                        <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.original_titel} />
                    </Link>
                ) )}
            


        </section>
    );
};
