import React from 'react'
import {Link} from 'react-router-dom'

const RatingBtn = (props) => {
  const ratingList = ['G - General Audiences', 'PG - Parental Guidance', 'PG - 13', 'R - Restricted', 'Adults Only']

  function btnGenerator () {
    return ratingList.map((item, key) => {
      return <div className='rating-btn'><p key={key}>{item}</p></div>
    })
  }

  return (
   <div className="ratings-btn-container">
     {btnGenerator()}
   </div>
  )
}
export default RatingBtn
