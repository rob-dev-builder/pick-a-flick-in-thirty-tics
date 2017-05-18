import React from 'react'

import DecadesBtn from './DecadesBtn'

const Decade = () => {
  return (
    <div className="decade">
      <div>
        <h1 className="decade-pick">Pick a Decade!</h1>
        <h2 class ="decade-subheading">Subheading goes here</h2>
      </div>
      <div className="decade-btn-container">
        <DecadesBtn />
      </div>
    </div>
  )
}

export default Decades
