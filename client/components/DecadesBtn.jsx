import React from 'react'
import {Link} from 'react-router-dom'

const DecadesBtn = (props) => {
  const decadeList = ['pre-1980s', '1980s', '1990s', '2000s', '2010s']

  function btnGenerator () {
    return decadeList.map((item, key) => {
      // return <Link to={props.url + '/' + key} key={key}>{item}</Link>
      return <div className='decade-btn'><p key={key}>{item}</p></div>
    })
  }


  return (
    <div className="decade-btns">
      {btnGenerator()}
    </div>
  )
}

export default DecadeBtn
