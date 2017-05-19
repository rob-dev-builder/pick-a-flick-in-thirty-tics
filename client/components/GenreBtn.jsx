import React from 'react'
import {Link} from 'react-router-dom'

const GenreBtn = (props) => {
  const genreList = ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Horror', 'Musical', 'Romance', 'Sci-Fi', 'Thriller', 'Western']

  function btnGenerator () {
    return genreList.map((item, key) => {
      // return <Link to={props.url + '/' + key} key={key}>{item}</Link>
      return <div className='genre-btn'><p key={key}>{item}</p></div>
    })
  }


  return (
    <div className="genre-btns">
      {btnGenerator()}
    </div>
  )
}

export default GenreBtn
