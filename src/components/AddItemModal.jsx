import xIcon from '../assets/x-icon.svg'

const AddItemModal = props => {
  return (
    <>
      <div className="grey-modal-background" />
      <div className="add-item-modal">
        <input type="text" placeholder={props.title} />
        <button onClick={() => props.setShowModal(false)}>
          <img src={xIcon} />
        </button>
        <ul className="items-list"></ul>
      </div>
    </>
  )
}

export default AddItemModal
