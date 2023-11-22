import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: '',
    totalBalance: 0,
    historyList: [],
    incomeAmount: 0,
    expensesAmount: 0,
  }

  deleteItem = id => {
    const {historyList} = this.state

    const filteredList = historyList.filter(each => each.id !== id)

    this.setState({historyList: filteredList})
  }

  onAddPayment = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const newPayment = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newPayment],
      title: '',
      amount: '',
      totalBalance: prevState.totalBalance + amount,
      incomeAmount: amount,
      expensesAmount: 0,
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {
      title,
      amount,
      type,
      historyList,
      totalBalance,
      incomeAmount,
      expensesAmount,
    } = this.state

    return (
      <div className="money-manager-bg-container">
        <div className="profile-container">
          <h1 className="profile-name">Hi, Richard</h1>
          <p className="welcome-msg">
            Welcome back to your <span className="span">Money manager</span>
          </p>
        </div>
        <MoneyDetails
          totalBalance={totalBalance}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="bottom-container">
          <div className="add-transaction-container">
            <h1 className="add-transaction-heading">Add Transaction</h1>
            <form
              className="form-container"
              action="/action_page.php"
              onSubmit={this.onAddPayment}
            >
              <label htmlFor="title" className="label-text">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                className="input-bar"
                onChange={this.onChangeTitle}
                value={title}
              />
              <label htmlFor="amount" className="label-text">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                className="input-bar"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <label htmlFor="type" className="label-text">
                TYPE
              </label>
              <select
                id="type"
                className="input-bar"
                name="type"
                onChange={this.onChangeType}
                value={type}
              >
                <option value={transactionTypeOptions[0].optionId} selected>
                  Income
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  Expenses
                </option>
              </select>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="add-transaction-heading">History</h1>
            <ul className="history-table">
              <li className="table-header">
                <p className="table-header-cell name-column">Title</p>
                <p className="table-header-cell">Amount</p>
                <p className="table-header-cell">Type</p>
              </li>
              {historyList.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  eachList={eachItem}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
