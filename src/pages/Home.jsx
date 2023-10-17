
import { Link } from "react-router-dom";
import { Movie } from "../components/Movie.jsx"
import { MovieDetails } from "./MovieDetails";

export const Home = ({ movieList }) => {
    //Här gör vi INTE FETCHEN! FLYTTAD TILL APP!!
    // detta pga insåg att vi behöver in movie från movieList även i MovieDetails!
    //display poster, titel, releasedate eller något annat! release_date
    //länkar till varje film


    return (
        <section className="movieList-section">
                {movieList.map((movie) => (
                    <Link className="singleMovie" key={movie.id} to={`/moviedetails/${movie.id}`}>
                        <Movie movie={movie}/>
                    </Link>
                ) )}
        </section>
    );
};
