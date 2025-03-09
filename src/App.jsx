import { useEffect } from 'react'
import { initializeExchangeRates } from './localStorage'
import Converter from './components/Converter'
import ExchangeRateList from './components/ExchangeRateList'
import './styles/App.css'

function App() {
  useEffect(() => {
    document.title = 'Emerald Market'
    initializeExchangeRates()
  }, [])

  return (
    <>
      <div className="top-img" />
      <header>
        <h1>Market rate for every emerald item</h1>
        <h6>
          So you don't have to torture villagers or spend hours building farms!
        </h6>
      </header>
      <Converter />
      <h2>Exchange rates</h2>
      <ExchangeRateList />
    </>
  )
}

export default App
