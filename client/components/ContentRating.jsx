import React from 'react'

import RatingBtn from './ContentRatingBtn'

const Ratings = () => {
  return (
    <div className="ratings">
        <div className="ratings-heading">
          <p>Pick a Rating!</p>
        </div>
      <div className="ratings-btn-container">
        <RatingBtn />
      </div>
    </div>
  )
}

export default Ratings
