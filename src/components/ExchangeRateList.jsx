import { useState, useEffect } from 'react'
import { getExchangeRates } from '../localStorage'
import ItemRate from './ItemRate'
import AddItemButton from './AddItemButton'
import AddItemModal from './AddItemModal'
import '../styles/ExchangeRateList.css'

const ExchangeRateList = () => {
  const [showModal, setShowModal] = useState(false)
  const [list, setList] = useState([])

  useEffect(() => {
    //Gets the exchange rates to render

    setList(getExchangeRates())

    // Linstens to changes in exchange rates
    const handleStorageChange = event => {
      if (event.key === 'Exchange rates') {
        const newRates = JSON.parse(event.newValue || [])
        setList(newRates)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return (
    <div className="exchange-rate-list">
      {showModal && <AddItemModal setShowModal={setShowModal} />}

      <ul>
        {list.map(rate => (
          <ItemRate key={rate.id} rate={rate} />
        ))}
        <AddItemButton setShowModal={setShowModal} />
      </ul>
    </div>
  )
}

export default ExchangeRateList
