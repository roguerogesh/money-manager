import './index.css'

const MoneyDetails = props => {
  const {totalBalance, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="your-balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p className="balance-name">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div>
          <p className="balance-name">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div>
          <p className="balance-name">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
