import React from 'react'
import {Link} from 'react-router-dom'

function Home (props) {
 return (
  <div className='home-Home'>
    <h1>Pick a Flick <br /> in 30 Ticks</h1>
    <h3>Answer seven questions in 30 seconds to get a movie recommendation.</h3>
    <h3>Can't answer all seven? We'll make a recommendation anyway!</h3>'
    <div className='start-Home'>
      <Link to='/go'><h1>Start</h1></Link>
    </div>
  </div>
 )
}

export default Home
