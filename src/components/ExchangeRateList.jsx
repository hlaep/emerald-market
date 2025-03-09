import { useState, useEffect } from 'react'
import ItemRate from './ItemRate'
import AddItemButton from './AddItemButton'
import AddItemModal from './AddItemModal'
import '../styles/ExchangeRateList.css'

const ExchangeRateList = () => {
  const [showModal, setShowModal] = useState(false)
  const [list, setList] = useState([
    {
      id: 'dirt',
      imgUrl:
        'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2f/Dirt.png',
      emeraldValue: 0.001
    }
  ])

  useEffect(() => {
    const handleStorageChange = event => {
      if (event.key === 'Echange rates') {
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
