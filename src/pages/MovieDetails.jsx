import React from "react";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";
import { MovieInfo } from "../components/MovieInfo";

export const MovieDetails = ({ upcomingList }) => {
    //useParams is here, it takes the thing behind the : in App, ie id, and makes it a variable we can use to match our content here.
    const { id } = useParams();

    //checking to see if correct id was sent.
    console.log("details id:", id);

    //matching the id from clicked movie with the movieList array to get the right movie info
    //also, converting the movieList id to string, to be able to match them!
    const upcomingMatch = upcomingList.find(
        (clickedMovie) => clickedMovie.id.toString() === id
    );

    //returns not found page if there is no match
    if (upcomingMatch === undefined) {
        return <NotFoundPage />;
    }

    //checking to see there is a match
    console.log("upcoming match", upcomingMatch);

    //putting the backdrop from api as background image for the section
    const backgroundStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${upcomingMatch.backdrop_path})`,
        ariaLabel: upcomingMatch.title,
    };

    return (
        <section className="moviedetails-section" style={backgroundStyle}>
          <MovieInfo id={upcomingMatch.id} poster={upcomingMatch.poster_path} title={upcomingMatch.title} vote={upcomingMatch.vote_average} description={upcomingMatch.overview} />
        </section>
    );
};
