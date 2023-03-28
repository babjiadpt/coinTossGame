// Write your code here
import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {toss: 0, heads: 0, tails: 0, totalCount: 0}

  onClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)

    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        totalCount: prevState.totalCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        totalCount: prevState.totalCount + 1,
      }))
    }

    this.setState({toss: tossResult})
  }

  render() {
    const {toss, heads, tails, totalCount} = this.state

    return (
      <div className="coin-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {toss === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="coin-icon"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="coin-icon"
            />
          )}
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickButton}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {totalCount}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
