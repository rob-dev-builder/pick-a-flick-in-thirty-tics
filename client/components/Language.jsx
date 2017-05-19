import React from 'react'

import LanguageBtn from './LanguageBtn'

const Language = () => {
  return (
    <div className="language">
        <div className="language-heading">
          <p>Pick a Language...</p>
        </div>
      <div className="language-btn-container">
        <LanguageBtn />
      </div>
    </div>
  )
}


export default Language
