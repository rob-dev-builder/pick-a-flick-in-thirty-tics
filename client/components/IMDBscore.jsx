import React from 'react'

function IMDBscore (props) {
  return (
    <div className='container-IMDBscore'>

      <div className='question-IMDBscore'>
        <h2>Pick an IMDB score</h2>
      </div>

      <div className='options-IMDBscore'>
        <div className='box0-IMDBscore'>
          <h3>Highly rated</h3>
        </div>
        <div className='box1-IMDBscore'>
          <h3>Good</h3>
        </div>
        <div className='box2-IMDBscore'>
          <h3>Mediocre</h3>
        </div>
        <div className='box3-IMDBscore'>
          <h3>I want a terrible movie!</h3>
        </div>
      </div>

    </div>
  )
}

export default IMDBscore
