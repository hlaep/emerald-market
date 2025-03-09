import xIcon from '../assets/x-icon.svg'

const CancelEditButton = props => {
  const handleCancelling = () => {
    props.setShowInput(false)
    props.setEmeraldValue('')
    props.setItemValue('')
  }
  return (
    <button onClick={() => handleCancelling()}>
      <img src={xIcon} />
    </button>
  )
}

export default CancelEditButton
