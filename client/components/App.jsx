import React from 'react'
// import {HashRouter as Router, Route} from 'react-router-dom'

import HeaderLeftBar from './HeaderLeftBar'
import Genre from './Genre'

const App = () => {
  return (
    // <Router>
      <div>
        <HeaderLeftBar />
        {/* <h1>React development has begun!</h1>  */}
        {/* <Route path='/home/q1' component={Genre} /> */}
        <Genre />
      </div>
    // </Router>
  )
}

export default App
