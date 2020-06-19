import { ADD_TO_CART, EMPTY_CART } from '../actions/cart'

const addItemToCart = (cart, product) => {
  const cartItem = cart.find(item => item.id === product.id)
  if (cartItem) {
    return cart.map(item => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    })
  } else {
    const newItem = { ...product, quantity: 1 }
    return cart.concat(newItem)
  }
}

const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addItemToCart(state, action.payload)
    case EMPTY_CART:
      return []
    default:
      return state
  }
}

export default cart