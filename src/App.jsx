import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { Home } from "./pages/Home.jsx";
import { Popular } from "./pages/Popular.jsx";
import { MovieDetails } from "./pages/MovieDetails.jsx";
import { PopularMovieDetails } from "./pages/PopularMovieDetails.jsx";

export const App = () => {
    //useState to save the data array from API into movieList
    const [upcomingList, setUpcomingList] = useState([]);
    const [popularList, setPopularList] = useState([]);

    //declaring the movie API for upcoming movies
    const APIupcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${
        import.meta.env.VITE_OPENDB_API_KEY
    }&language=en-US&`;

    //declaring the movie API for popular movies
    const APIpopular = `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_OPENDB_API_KEY
    }&language=en-US&page=1`;

    //creating a function to fetch the upcoming movie data
    const fetchUpcomingMovies = async () => {
        try {
            const response = await fetch(APIupcoming);

            if (!response.ok) {
                throw new Error("Failed to fetch movies");
            }
            const result = await response.json();
            //loading UpcomingList with the movie array
            setUpcomingList(result.results);
        } catch (error) {
            console.error("Error with fetch", error);
        }
    };

    //creating a function to fetch the popular movie data
    const fetchPopularMovies = async () => {
        try {
            const response = await fetch(APIpopular);

            if (!response.ok) {
                throw new Error("Failed to fetch movies");
            }
            const result = await response.json();
            //loading UpcomingList with the movie array
            setPopularList(result.results);
        } catch (error) {
            console.error("Error with fetch", error);
        }
    };

    //performing the fetches!
    useEffect(() => {
        fetchUpcomingMovies();
        fetchPopularMovies();
    }, []);

    console.log("popular1", popularList);
    console.log("upcoming1", upcomingList);

    // DISCLAIMER: we chose to have the fetches in App,
    // and send the data to the rest of the page from here.
    // It does look messy, we couldn't make a component for the routes,
    // because of the dataflow we chose. (We tried to send the props on to another component,
    // but Routes does not accept other element than Route or a react fragment.)

    return (
        <BrowserRouter>
            <Nav />
            <main>
                <Routes >
                <Route
            path="/"
            element={<Home upcomingList={upcomingList} />}
          ></Route>
          <Route
            path="/moviedetails/:id"
            element={
              <MovieDetails
                upcomingList={upcomingList}
              />
            }
          ></Route>
          <Route
            path="/popularmoviedetails/:id"
            element={<PopularMovieDetails popularList={popularList} />}
          ></Route>
          <Route
            path="/popular"
            element={<Popular popularList={popularList} />}
          ></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};
