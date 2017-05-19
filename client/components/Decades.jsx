import React from 'react'

import DecadesBtn from './DecadesBtn'

const Decades = () => {
  return (
    <div>
      <p>This is the decades component</p>
      <div className="Decades">
        <div>
          <h1 className="decades-pick">Pick a Decade!</h1>
          <h2 class ="decades-subheading">Subheading goes here</h2>
        </div>
      </div>
      <div className="decades-btn-container">
        <DecadesBtn />
      </div>
    </div>
  )
}


export default Decades
