import React from "react";
import { Link } from "react-router-dom";
import { MovieCard } from "../components/MovieCard.jsx";

export const Popular = ({ popularList }) => {
  
  // Logs the value of popularList to the console to check the content of popularList when the component is rendered.
  console.log("popular-list", popularList)
  
  return (
    <section className="movieList-section">
      {/* Iterates over the popularList array. */}
      {popularList.map((movie) => (
        // A navigational link that sets the destination URL for the link (=to).
        <Link
          className="singleMovie"
          // Provides a unique identifier for React to efficiently track elements in a list.
          key={movie.id}
          to={`/popularmoviedetails/${movie.id}`}
        >
          <MovieCard movie={movie} />
        </Link>
      ))}
    </section>
  );
};
