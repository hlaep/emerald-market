import { updateExchangeRate } from '../localStorage'
import confirmIcon from '../assets/confirm.svg'

const ConfirmEditButton = props => {
  const handleUpdateRate = () => {
    updateExchangeRate(props.id, props.itemInputValue, props.emeraldInputValue)
    props.setShowInput(false)
  }

  return (
    <button onClick={() => handleUpdateRate()}>
      <img src={confirmIcon} />
    </button>
  )
}

export default ConfirmEditButton
