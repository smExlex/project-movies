import React from "react";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";
import { MovieInfo } from "../components/MovieInfo";


export const PopularMovieDetails = ({ popularList }) => {
  //useParams is here, it takes the thing behind the : in App, ie id, and makes it a variable we can use to match our content here.
  const { id } = useParams();

  console.log("details popular id:", id);
  
  //matching the id from clicked movie with the movieList array to get the right movie info
  //also, converting the movieList id to string, to be able to match them!

  const popularMatch = popularList.find(
    (clickedMovie) => clickedMovie.id.toString() === id
  );
  
  //returns not found page if there is no match
  if (popularMatch === undefined) {
    return <NotFoundPage />;
  }

  //putting the backdrop from api as background image for the section
  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${popularMatch.backdrop_path})`,
    ariaLabel: popularMatch.title,
  };

  return (
    <section className="moviedetails-section" style={backgroundStyle}>
      <MovieInfo id={popularMatch.id} poster={popularMatch.poster_path} title={popularMatch.title} vote={popularMatch.vote_average} description={popularMatch.overview} />
    </section>
  );
};
