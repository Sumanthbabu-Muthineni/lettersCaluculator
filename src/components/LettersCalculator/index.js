// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeLettersCount = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const count = searchInput.length

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">
            Calculate the
            <br /> Letters you
            <br /> enter
          </h1>
          <label className="input-para" htmlFor="userInput">
            Enter the phrase
          </label>
          <div>
            <input
              id="userInput"
              type="text"
              className="input-holder"
              placeholder="Enter the phrase"
              onChange={this.onChangeLettersCount}
            />
          </div>
          <div className="button-container">
            <p>No.of letters: {count}</p>
          </div>
        </div>
        <div>
          <img
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image-letter"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
