import './index.css'

const TransactionItem = props => {
  const {eachList, deleteItem} = props
  const {id, title, amount, type} = eachList

  const onDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <li className="table-headers">
      <p className="table-header-cells name-column">{title}</p>
      <p className="table-header-cells">{amount}</p>
      <p className="table-header-cells">{type}</p>
      <button
        type="button"
        className="delete-button"
        data-testid="delete"
        onClick={onDeleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
