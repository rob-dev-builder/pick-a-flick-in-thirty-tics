import React from 'react'

import Clock from './Clock.jsx'

const HeaderLeftBar = (props) => {
  return (
      <div className="header-left-bar">
        <div className="header">
          <h1>Pick a Flick in <Clock timeout={props.timeout} /> Tics</h1>
        </div>
      </div>
  )
}

export default HeaderLeftBar
