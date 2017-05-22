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
    this.setState({seconds: Number(this.state.seconds - 1)})
    if (this.state.seconds === 0) {
      this.componentWillUnmount()
      this.props.timeout()
    }
  }

  render () {
    return (
      <strong>
        {this.state.seconds}
      </strong>
    )
  }
}

export default Clock
