import React from "react";
import { Link } from "react-router-dom";
import { MovieCard } from "../components/MovieCard.jsx";

export const Home = ({ upcomingList }) => {
 
  return (
    <section className="movieList-section">
      {upcomingList.map((movie) => (
        // Creating a navigational link 
        <Link
          className="singleMovie"
          // Key - provides a unique identifier for React to efficiently track elements when they change or are removed from a list.
          key={movie.id}
          // Sets the destination URL for the link.
          to={`/moviedetails/${movie.id}`}
        >
          {/* Passes the current movie object as a prop to the MovieCard component. */}
          <MovieCard movie={movie} />
        </Link>
      ))}
    </section>
  );
};
