import React from 'react'
import {Link} from 'react-router-dom'

function PickALength (props) {
 return (
  <div className='length-Length'>
    <div className='subTitle-Length'>
      <h2>Pick a length</h2>
    </div>
    <div className='options-Length'>
      <Link to='/q/q3'>
        <div className='box-Length'>
          <h3>Really short!</h3>
          <p>Less than 90 minutes</p>
        </div>
      </Link>
      <Link to='/q/q3'>
        <div className='box-Length'>
          <h3>On the short side</h3>
          <p>1.5 hrs to 2hrs</p>
        </div>
      </Link>
      <Link to='/q/q3'>
        <div className='box-Length'>
          <h3>On the long side</h3>
          <p>2hrs to 2.5 hrs</p>
        </div>
      </Link>
      <Link to='/q/q3'>
        <div className='box-Length'>
          <h3>I want a marathon!</h3>
          <p>More than 2.5 hours</p>
        </div>
      </Link>
    </div>
  </div>
 )
}

export default PickALength
