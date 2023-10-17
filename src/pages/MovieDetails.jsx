import { useParams } from 'react-router-dom'
import React from 'react'

export const MovieDetails = ({ movieList }) => {
    //useParams is here, it takes the thing behind the : in App, ie id, and makes it a variable we can use to match our content here. 
    const { id } = useParams()

    console.log("details id:", id)
    console.log("movieList in MovieDetails:", movieList)
    //matching the id from clicked movie with the movieList array to get the right movie info
    //also, converting the movieList id to string, to be able to match them!
    const movieMatch = movieList.find((clickedMovie) => clickedMovie.id.toString() === id)
    console.log("movieMatch:", movieMatch)

    //En tillbaka till Home knapp
    //Här vill vi ha en backdrop_path, poster_path, original_titel, vote_average, overview, release_date
    // vi behöver ett Id? :)

    const backgroundStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movieMatch.backdrop_path})`,
    };

  return (
    <section className='moviedetails-section' style={backgroundStyle}>
        <a href="/">GO BACK</a>
        <img src={`https://image.tmdb.org/t/p/w342/${movieMatch.poster_path}`} alt={movieMatch.title} />
        <h2>{movieMatch.title}</h2>
        <p className='release-date'>{movieMatch.release_date}</p>
        <p className='vote'>{movieMatch.vote_average}</p>
        <p className='description'>{movieMatch.overview}</p>
    </section>
  )
}
