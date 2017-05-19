import React from 'react'

import DecadesBtn from './DecadesBtn'

const Decades = () => {
  return (
    <div className="decades">
        <div className="decades-heading">
          <p>Pick a Decade!</p>
        </div>
      <div className="decades-btn-container">
        <DecadesBtn />
      </div>
    </div>
  )
}


export default Decades
