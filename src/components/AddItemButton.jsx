import plusIcon from '../assets/plus-icon.svg'

const AddItemButton = props => {
  return (
    <li className="add-item-bnt item-rate">
      <button onClick={() => props.setShowModal(true)}>
        <img src={plusIcon} />
      </button>
    </li>
  )
}

export default AddItemButton
