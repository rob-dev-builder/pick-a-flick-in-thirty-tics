import React from 'react'

import FinalPage from './FinalPage.jsx'

class Questions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      question: 0,
      options: getQuestion(),
      answers: [],
      result: null
    }
    this.reload = this.reload.bind(this)
    this.answerQuestion = this.answerQuestion.bind(this)
  }

  answerQuestion (id) {
    chooseOption(id)
    if (remainingResults.length === 1) {
      this.setState({
        result: remainingResults[0]
      })
    } else {
      this.setState({
        answers: this.state.answers.concat([questions[questionNum - 1].options[id]]),
        question: this.question + 1,
        options: getQuestion()
      })
    }
  }

  reload() {
    reset()
    this.setState({
      answers: [],
      question: 0,
      options: getQuestion(),
      result: null
    })

  }

  render () {
    if (this.state.result) {
      return (
        <div>
          <div className='left-bar'>
            {this.state.answers.map(answer => {
              return (
                <div className='bar-block'><h2>{answer}</h2></div>
              )
            })}
          </div>
          <FinalPage result={this.state.result} reload={this.reload} />
        </div>
      )
    } else {
      return (
        <div>
          <div className='left-bar'>
            {this.state.answers.map(answer => {
              return (
                <div className='bar-block'><h2>{answer}</h2></div>
              )
            })}
          </div>
          <div className='genre'>
            <div>
              <h1 className='genre-pick'>Pick a Genre</h1>
            </div>
            <div className='genre-btn-container'>
              {this.state.options.map((option, id) => {
                return (
                  <div className='genre-btn' onClick={() => this.answerQuestion(id)}>
                    <p>{option}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Questions
