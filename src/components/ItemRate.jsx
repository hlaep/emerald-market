import { useState } from 'react'
import ConfirmEditButton from './ConfirmEditButton'
import exchangeIcon from '../assets/exchange-icon.svg'
import emeraldPng from '../assets/emerald.png'
import editIcon from '../assets/edit.svg'
import CancelEditButton from './CancelEditButton'

const ItemRate = props => {
  const [showInput, setShowInput] = useState(false)
  const [itemValue, setItemValue] = useState('')
  const [emeraldValue, setEmeraldValue] = useState('')

  const handleItemInputChange = event => {
    setItemValue(event.target.value)
  }

  const handleEmeraldInputChange = event => {
    setEmeraldValue(event.target.value)
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
            value={itemValue}
            onChange={handleItemInputChange}
          />
        ) : (
          <p className="rate-display">0</p>
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
            value={emeraldValue}
            onChange={handleEmeraldInputChange}
          />
        ) : (
          <p className="rate-display">0</p>
        )}
      </div>

      {showInput ? (
        <div className="confirm-delete-buttons-container">
          <ConfirmEditButton />
          <CancelEditButton
            setShowInput={setShowInput}
            setEmeraldValue={setEmeraldValue}
            setItemValue={setItemValue}
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
