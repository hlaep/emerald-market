const updateExchangeRates = updatedRates => {
  try {
    localStorage.setItem('exchange rates', JSON.stringify(updatedRates))
  } catch (error) {
    console.error('Error updating exchangeRates', error)
  }
}

export const initializeExchangeRates = () => {
  try {
    if (!localStorage.getItem('exchange rates')) {
      localStorage.setItem(
        'exchange rates',
        JSON.stringify([
          {
            id: 'dirt',
            imgUrl:
              'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2f/Dirt.png',
            emeraldAmount: 1,
            itemAmount: 100
          }
        ])
      )
    }
  } catch (error) {
    console.error('Error accessing localStorage: ', error)
  }
}

export const getExchangeRates = () => {
  try {
    return JSON.parse(localStorage.getItem('exchange rates'))
  } catch (error) {
    console.error('Error getting exchange rates', error)
  }
}

export const updateExchangeRate = (id, newItemAmount, newEmeraldAmount) => {
  const exchangeRates = getExchangeRates()
  const oldRate = exchangeRates.find(rate => rate.id === id)
  const newRate = {
    ...oldRate,
    emeraldAmount: newEmeraldAmount,
    itemAmount: newItemAmount
  }

  const exchangeRatesWithoutOldRate = exchangeRates.filter(
    rate => rate.id !== id
  )

  const newExchangeRates = [...exchangeRatesWithoutOldRate, newRate]
  updateExchangeRates(newExchangeRates)
}
