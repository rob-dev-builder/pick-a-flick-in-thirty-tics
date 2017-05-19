import React from 'react'

class Clock extends React.Component {
  constructor (props) {
    super(props)
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
    if (this.state.seconds <= 1 || this.state.seconds === 0) {
      this.componentWillUnmount()
    }
    this.setState({seconds: Number(this.state.seconds - 1)})
  }

  render () {
    return (
      <div className='Countdown'>
        <p>Ticks left: {this.state.seconds}</p>
      </div>
    )
  }
}

export default Clock
