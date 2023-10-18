import { useParams } from "react-router-dom";
import React from "react";
import { NotFoundPage } from "./NotFoundPage";
//import star from "../../public/star.svg";

export const MovieDetails = ({ upcomingList }) => {
  //useParams is here, it takes the thing behind the : in App, ie id, and makes it a variable we can use to match our content here.
  const { id } = useParams();

  console.log("details id:", id);
  console.log("upcomingList in MovieDetails:", upcomingList);
  //matching the id from clicked movie with the movieList array to get the right movie info
  //also, converting the movieList id to string, to be able to match them!
  const upcomingMatch = upcomingList.find(
    (clickedMovie) => clickedMovie.id.toString() === id
  );

  if (upcomingMatch === undefined) {
    return <NotFoundPage />;
  }

  console.log("upcoming match", upcomingMatch);

  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${upcomingMatch.backdrop_path})`,
    ariaLabel: upcomingMatch.title,
  };

  return (
    <section className="moviedetails-section" style={backgroundStyle}>
      <div className="moviedetails-wrapper" key={upcomingMatch.id}>
        <img
          src={`https://image.tmdb.org/t/p/w342/${upcomingMatch.poster_path}`}
          alt={upcomingMatch.title}
        />
        <h2>{upcomingMatch.title}</h2>
        <p className="release-date">{upcomingMatch.release_date}</p>
        <p className="vote">⭐️ {upcomingMatch.vote_average}</p>
        <p className="description">{upcomingMatch.overview}</p>
      </div>
    </section>
  );
};

//     <section className="moviedetails-section">
//       {MovieArrays.map((movie) => (
//         <div className="moviedetails-wrapper">
//           <h2>{movie.title}</h2>
//           <img
//             src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
//             alt={movie.title}
//           />

//           <p className="release-date">{movie.release_date}</p>
//           <p className="vote">⭐️ {movie.vote_average}</p>
//           <p className="description">{movie.overview}</p>
//         </div>
//       ))}
//     </section>
//   );
// };
