import xIcon from '../assets/x-icon.svg'

const CancelEditButton = props => {
  const handleCancelling = () => {
    props.setShowInput(false)
    props.setEmeraldInputValue(props.emeraldAmount)
    props.setItemInputValue(props.itemAmount)
  }
  return (
    <button onClick={() => handleCancelling()}>
      <img src={xIcon} />
    </button>
  )
}

export default CancelEditButton
