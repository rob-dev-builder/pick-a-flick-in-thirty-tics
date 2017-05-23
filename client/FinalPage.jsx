import React from 'react'
import {Link} from 'react-router-dom'

class FinalPage extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="final-page">
        <div className="final-title">
          <h2>You have picked...</h2>
        </div>
        <div className="final-movie">
          <h2 className="final-movie-title">{this.props.result.movie_title}</h2>
          <p className="final-year">Year: {this.props.result.title_year}</p>
          <p className="final-length">Length: {this.props.result.duration} minutes</p>
          <p className="final-genre">Genres: {this.props.result.genres.split('|').join(' ')}</p>
          <p className="final-score">IMDB Score: {this.props.result.imdb_score}</p>
          <p className="final-language">Language: {this.props.result.language}</p>
          <p className="final-rating">Content Rating: {this.props.result.content_rating}</p>
        </div>
        <div className="start-again" onClick={this.props.reloading}>
          <h2><Link to='/'>Start again</Link></h2>
        </div>
      </div>
    )
  }
}

export default FinalPage
