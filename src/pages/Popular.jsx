import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../components/Movie.jsx";

export const Popular = ({ popularList }) => {
  return (
    <section className="movieList-section">
      {popularList.map((movie) => (
        <Link
          className="singleMovie"
          key={movie.id}
          to={`/moviedetails/${movie.id}`}
        >
          <Movie movie={movie} />
        </Link>
      ))}
    </section>
  );
};
