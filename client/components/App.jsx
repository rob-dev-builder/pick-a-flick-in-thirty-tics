import React from 'react'
import Clock from './Clock'
import Rating from './ContentRating'

import Home from './Home.jsx'
import PickALength from './PickALength.jsx'

function App (props) {
  return (
    <div>
    <Rating />
    <Clock />
      <Home />
      {/* <PickALength /> */}
    </div>
  )
}

export default App
