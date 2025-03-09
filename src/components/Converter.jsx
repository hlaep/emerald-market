import TradingSection from './TradingSection'
import changeIcon from '../assets/change-icon.svg'
import exchangeIcon from '../assets/exchange-icon.svg'
import emeraldPng from '../assets/emerald.png'
import '../styles/Converter.css'

const Converter = () => {
  return (
    <div className="converter">
      <TradingSection title={'Emerald'} img={emeraldPng} />

      <img src={exchangeIcon} alt="exchange icon" />

      <TradingSection
        title={'Dirt'}
        img={
          'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2f/Dirt.png'
        }
      />

      <button>
        <img src={changeIcon} alt="change item" />
      </button>
    </div>
  )
}

export default Converter
