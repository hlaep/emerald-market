const TradingSection = props => {
  return (
    <div className="trading-section">
      <h3>{props.title}</h3>
      <img src={props.img} />
      <input type="number" className="number-input" min="0" />
    </div>
  )
}

export default TradingSection
