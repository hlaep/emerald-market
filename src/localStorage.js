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
