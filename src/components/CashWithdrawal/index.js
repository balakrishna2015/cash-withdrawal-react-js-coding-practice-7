// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="cash-container">
          <div className="name-container">
            <p className="s-letter">{initial}</p>
            <h1 className="heading">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="description">Your Balance</p>
            <p className="amount">{balance}</p>
          </div>
          <div className="in-rupees">
            <p className="in-rupee-description">In Rupees</p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
