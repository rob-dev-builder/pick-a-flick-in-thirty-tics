import React from 'react'
// import ReactDOM from 'react-dom'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    // this.state = {date: new Date()}
    // let second = 30
    this.state = {seconds: 30}
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
      seconds: Number(this.state.seconds - 1)
    })
  }

  render () {
    return (
      <div>
        <h2>Ticks left:</h2>
        <h2>{this.state.seconds}</h2>
      </div>
    )
  }
}

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// )

export default Clock
