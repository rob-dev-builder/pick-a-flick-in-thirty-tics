import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home.jsx'
import Header from './HeaderLeftBar.jsx'
import Question from './Genre.jsx'

function App (props) {

  return (
    <Router>
      <div>
        <Route exact path={'/'} component={Home} />
        <Route path={'/go'} component={Question} />
      </div>
    </Router>
  )
}

export default App
