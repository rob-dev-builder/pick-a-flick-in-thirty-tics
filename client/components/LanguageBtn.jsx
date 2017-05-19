import React from 'react'
import {Link} from 'react-router-dom'

const LanguageBtn = (props) => {
  const languageList = ['English', 'Foreign']

  function btnGenerator () {
    return languageList.map((item, key) => {
      // return <Link to={props.url + '/' + key} key={key}>{item}</Link>
      return <div className='language-btn'><p key={key}>{item}</p></div>
    })
  }


  return (
    <div className="language-btns">
      {btnGenerator()}
    </div>
  )
}

export default LanguageBtn
