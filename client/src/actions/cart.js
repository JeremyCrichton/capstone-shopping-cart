export const ADD_TO_CART = "ADD_TO_CART"
export const EMPTY_CART = "EMPTY_CART"

export const addToCart = (product) => {
  return { type: ADD_TO_CART, payload: product }
}

export const emptyCart = () => {
  return { type: EMPTY_CART }
}