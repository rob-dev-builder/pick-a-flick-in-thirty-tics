import React from 'react'

import Language from './Language'
import Decades from './Decades'
import Clock from './Clock'
import Rating from './ContentRating'


import Home from './Home.jsx'
import PickALength from './PickALength.jsx'

function App (props) {
  return (
    <div>
      <h1>React development has begun!</h1>
      <Decades />
      <Rating />
      <Clock />
      <Home />
      {/* <PickALength /> */}
    </div>
  )
}

export default App
