import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



import { MovieDetails } from "./pages/MovieDetails";
import { Home } from "./pages/Home.jsx";

export const App = () => {

  //useState to save the data array from API into movieList
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
        <BrowserRouter>
            <main>
                <h1>UPCOMING MOVIES</h1>
                <Routes>

                    <Route path="/" element={<Home movieList={movieList}/>}></Route>
                    <Route
                        path="/moviedetails/:id"
                        element={<MovieDetails movieList={movieList} />}
                    ></Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};
