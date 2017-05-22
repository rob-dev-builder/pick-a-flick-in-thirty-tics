import React from 'react'

import Header from './HeaderLeftBar.jsx'
import FinalPage from './FinalPage.jsx'

class Questions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      question: 0,
      options: getOptions(),
      answers: [],
      result: null,
      categories: getCategories()
    }
    this.reload = this.reload.bind(this)
    this.answerQuestion = this.answerQuestion.bind(this)
    this.pickFromRemaining = this.pickFromRemaining.bind(this)
  }

  answerQuestion (id) {
    chooseOption(id)
    if (remainingResults.length === 1) {
      this.setState({
        result: remainingResults[0]
      })
    } else {
      this.setState({
        answers: this.state.answers.concat([questions[questionNum - 1].optionNames[id]]),
        question: this.question + 1,
        options: getOptions()
      })
    }
  }

  pickFromRemaining() {
    this.setState({
      result: remainingResults[Math.floor(Math.random() * remainingResults.length)]
    })
  }

  reload () {
    reset()
    this.setState({
      answers: [],
      question: 0,
      options: getOptions(),
      result: null
    })
  }

  render () {
    return (
      <div>
        <Header timeout={this.pickFromRemaining} />
        <div className='left-bar'>
          {this.state.answers.map(answer => <div className='bar-block'><h2>{answer}</h2></div>)}
        </div>

        {this.state.result !== null && <FinalPage result={this.state.result} reload={this.reload} />}

        {this.state.result === null && (
          <div className='genre'>
            <div>
              <h1 className='genre-pick'>Pick a {this.state.categories[questionNum]}</h1>
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
        )}

      </div>
    )
  }
}

export default Questions
