import './index.css'

const TabList = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {id, buttonText} = tabDetails

  const onClickTab = () => {
    updateTabId(id)
  }

  const activeStyle = isActive ? 'button active' : 'button'

  return (
    <li className="tab-list">
      <button type="button" className={activeStyle} onClick={onClickTab}>
        {buttonText}
      </button>
    </li>
  )
}

export default TabList
