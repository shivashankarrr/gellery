import './index.css'

const HistoryItem = props => {
  const {historyList, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="history-container">
        <div className="history-details">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="icon" />
          <p className="icon-name">{title}</p>
          <p className="icon-url"> {domainUrl}</p>
        </div>
        <div className="history-button">
          <button
            data-testid="delete"
            type="button"
            className="button"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default HistoryItem
