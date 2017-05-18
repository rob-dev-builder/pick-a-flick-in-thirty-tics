import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

import App from './components/App'

const Decades = (props) => {
  return (
    <div class="decades">
      <div class="decade-header">
        <h2>Pick a decade!</h2>
        <p><em>We all know the 90s is the best...</em></p>
      </div>
      <div class="decade-choices">
        <div class="decade-choice">
          <Link to={props.url+'/1'}>Choice 1</Link>
        </div>
        <div class="decade-choice">
          <Link to={props.url+'/2'}>Choice 2</Link>
        </div>
        <div class="decade-choice">
          <Link to={props.url+'/3'}>Choice 3</Link>
        </div>
      </div>
    </div>

    )
}

export default Decades
