import React from "react";
import { Link } from "react-router-dom";
import { MovieCard } from "../components/MovieCard.jsx";

export const Popular = ({ popularList }) => {

  console.log("popular-list", popularList)
  return (
    <section className="movieList-section">
      {popularList.map((movie) => (
        <Link
          className="singleMovie"
          key={movie.id}
          to={`/popularmoviedetails/${movie.id}`}
        >
          <MovieCard movie={movie} />
        </Link>
      ))}
    </section>
  );
};
