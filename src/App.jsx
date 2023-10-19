import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Nav } from "./components/Nav.jsx";
// import { routes } from "./components/routes/routes.jsx"
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

  console.log(APIupcoming);

  //declaring the movie API for popular movies
  const APIpopular = `https://api.themoviedb.org/3/movie/popular?api_key=${
    import.meta.env.VITE_OPENDB_API_KEY
  }&language=en-US&page=1`;

  //creating a function to fetch the movie data
  const fetchUpcomingMovies = async () => {
    try {
      const response = await fetch(APIupcoming);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const result = await response.json();
      console.log("result", result);
      setUpcomingList(result.results);
    } catch (error) {
      console.error("Error with fetch", error);
    }
  };

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(APIpopular);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const result = await response.json();
      console.log("result", result);
      setPopularList(result.results);
    } catch (error) {
      console.error("Error with fetch", error);
    }
  };

  useEffect(() => {
    fetchUpcomingMovies();
    fetchPopularMovies();
  }, []);

  console.log("popular1", popularList);
  console.log("upcoming1", upcomingList);

  return (
    <BrowserRouter>
      <main>
        <Nav />
        <Routes>
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
