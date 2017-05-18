import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    // this.state = {date: new Date()}
    let second = 30
    this.state = {seconds: second}
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <div>
        <h2>Ticks left:</h2>
        <h2>{this.state.second}.</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)

module.exports = Clock
