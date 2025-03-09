import { useState } from 'react'
import ConfirmEditButton from './ConfirmEditButton'
import exchangeIcon from '../assets/exchange-icon.svg'
import emeraldPng from '../assets/emerald.png'
import editIcon from '../assets/edit.svg'
import CancelEditButton from './CancelEditButton'

const ItemRate = props => {
  const [showInput, setShowInput] = useState(false)
  const [itemInputValue, setItemInputValue] = useState(
    props.rate.itemAmount || ''
  )
  const [emeraldInputValue, setEmeraldInputValue] = useState(
    props.rate.emeraldAmount || ''
  )

  const handleItemInputChange = event => {
    setItemInputValue(event.target.value)
  }

  const handleEmeraldInputChange = event => {
    setEmeraldInputValue(event.target.value)
  }

  return (
    <li className="item-rate">
      <div className="display-section">
        <img src={props.rate.imgUrl} />
        {showInput ? (
          <input
            type="number"
            min="0"
            className="rate-input"
            value={itemInputValue}
            onChange={handleItemInputChange}
          />
        ) : (
          <p className="rate-display">{props.rate.itemAmount}</p>
        )}
      </div>

      <img src={exchangeIcon} />

      <div className="display-section">
        <img src={emeraldPng} />
        {showInput ? (
          <input
            type="number"
            min="0"
            className="rate-input"
            value={emeraldInputValue}
            onChange={handleEmeraldInputChange}
          />
        ) : (
          <p className="rate-display">{props.rate.emeraldAmount}</p>
        )}
      </div>

      {showInput ? (
        <div className="confirm-delete-buttons-container">
          <ConfirmEditButton />
          <CancelEditButton
            setShowInput={setShowInput}
            setEmeraldInputValue={setEmeraldInputValue}
            setItemInputValue={setItemInputValue}
            emeraldAmount={props.rate.emeraldAmount}
            itemAmount={props.rate.itemAmount}
          />
        </div>
      ) : (
        <button onClick={() => setShowInput(true)}>
          <img src={editIcon} alt="edit exchange button" />
        </button>
      )}
    </li>
  )
}

export default ItemRate
