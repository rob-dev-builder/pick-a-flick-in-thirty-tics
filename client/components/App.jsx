import React from 'react'
// import {HashRouter as Router, Route} from 'react-router-dom'

import Genre from './Genre'

const App = () => {
  return (
    // <Router>
      <div>
        <div className="header">
          <h1>Pick a Flick in Thirty Tics</h1>
        </div>
        {/* <h1>React development has begun!</h1>  */}
        {/* <Route path='/1' component={Genre} /> */}
        <Genre />
      </div>
    // </Router>
  )
}

export default App
