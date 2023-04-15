import './index.css'

const BrowserHistory = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-list-container">
      <div className="time-accessed">
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="title-details">
        <img src={logoUrl} className="img-style" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <div className="delete-button">
        <button type="button" onClick={onDelete} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserHistory
