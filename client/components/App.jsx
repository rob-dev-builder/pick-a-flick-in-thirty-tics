import React from 'react'
// import {HashRouter as Router, Route} from 'react-router-dom'

import HeaderLeftBar from './HeaderLeftBar'
import Genre from './Genre'
import FinalPage from './FinalPage'

const App = () => {
  return (
    // <Router>
      <div class="main-container">
        <HeaderLeftBar />
        {/* <h1>React development has begun!</h1>  */}
        {/* <Route path='/home/q1' component={Genre} /> */}
        {/* <Genre /> */}
        <FinalPage />
      </div>
    // </Router>
  )
}

export default App
