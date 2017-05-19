import React from 'react'

import Language from './Language'
import Decades from './Decades'
import Clock from './Clock'
import Rating from './ContentRating'
import HeaderLeftBar from './HeaderLeftBar'
import Home from './Home'
import PickALength from './PickALength.jsx'

function App (props) {
  return (
    <div>
      <HeaderLeftBar />
      <Home />
      <Decades />
      <Rating />
      <Clock />
      <Home />
      <PickALength />
    </div>
  )
}

export default App
