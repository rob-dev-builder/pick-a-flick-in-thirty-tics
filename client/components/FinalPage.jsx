import React from 'react'
import {Link} from 'react-router-dom'
import FinalPageMovies from './FinalPageMovies'

const FinalPage = () => {
  return (
    <div className="final-page">
      <div className="final-title">
        <h2>We picked some movies you might enjoy based on your answers...</h2>
        <h2>Enjoy!</h2>
      </div>
      <div className="final-movie-list">
        <FinalPageMovies />
        <FinalPageMovies />
      </div>
      <div className="start-again">
        <Link to='/'><h2>Start again</h2></Link>
      </div>
    </div>
  )
}

export default FinalPage
