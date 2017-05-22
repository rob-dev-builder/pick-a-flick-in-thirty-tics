import React from 'react'
import {Link} from 'react-router-dom'

const FinalPage = (props) => {
  return (
    <div className="final-page">
      <div className="final-title">
        <h2>You have picked...</h2>
      </div>
      <div className="final-movie">
        <h2 className="final-movie-title">{props.result.movie_title}</h2>
        <p className="final-year">Year: {props.result.title_year}</p>
        <p className="final-length">Length: {props.result.duration} minutes</p>
        <p className="final-genre">Genres: {props.result.genres.split('|').join(' ')}</p>
        <p className="final-score">IMDB Score: {props.result.imdb_score}</p>
        <p className="final-language">Language: {props.result.language}</p>
        <p className="final-rating">Content Rating: {props.result.content_rating}</p>
      </div>
      <div className="start-again" onClick={props.reload}>
        <h2><Link to='/'>Start again</Link></h2>
      </div>
    </div>
  )
}

export default FinalPage
