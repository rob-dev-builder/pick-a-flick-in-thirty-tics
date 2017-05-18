import React from 'react'

import GenreBtn from './GenreBtn'

const Genre = () => {
  return (
    <div className="genre">
      <div>
        <h1 className="genre-pick">Pick a Genre</h1>
      </div>
      <div className="genre-btn-container">
        <GenreBtn />
      </div>
    </div>
  )
}

export default Genre
