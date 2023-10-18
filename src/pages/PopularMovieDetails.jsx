import { useParams } from "react-router-dom";
import React from "react";

export const PopularMovieDetails = ({ popularList }) => {
  //useParams is here, it takes the thing behind the : in App, ie id, and makes it a variable we can use to match our content here.
  const { id } = useParams();

  console.log("details id:", id);
  //matching the id from clicked movie with the movieList array to get the right movie info
  //also, converting the movieList id to string, to be able to match them!

  const popularMatch = popularList.find(
    (clickedMovie) => clickedMovie.id.toString() === id
  );
  console.log("popular match", popularMatch);

  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${popularMatch.backdrop_path})`,
    ariaLabel: popularMatch.title,
  };

  return (
    <section className="moviedetails-section" style={backgroundStyle}>
      <div className="moviedetails-wrapper">
        <h2>{popularMatch.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w342/${popularMatch.poster_path}`}
          alt={popularMatch.title}
        />
        <p className="release-date">{popularMatch.release_date}</p>
        <p className="vote">⭐️ {popularMatch.vote_average}</p>
        <p className="description">{popularMatch.overview}</p>
      </div>
    </section>
  );
};
