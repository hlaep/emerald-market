import { useState, useEffect } from 'react'
import { getExchangeRates } from '../localStorage'
import ItemRate from './ItemRate'
import AddItemButton from './AddItemButton'
import AddItemModal from './AddItemModal'
import '../styles/ExchangeRateList.css'

const ExchangeRatesList = () => {
  const [showModal, setShowModal] = useState(false)
  const [list, setList] = useState(getExchangeRates())

  return (
    <div className="exchange-rate-list">
      {showModal && <AddItemModal setShowModal={setShowModal} />}

      <ul>
        {list.map(rate => (
          <ItemRate key={rate.id} {...rate} />
        ))}
        <AddItemButton setShowModal={setShowModal} />
      </ul>
    </div>
  )
}

export default ExchangeRatesList
