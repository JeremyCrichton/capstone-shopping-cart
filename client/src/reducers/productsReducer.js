import * as productActions from '../actions/products'

const products = (state = [], action) => {
  switch (action.type) {
    case productActions.RECEIVE_ALL_PRODUCTS:
      return action.payload
    case productActions.EDIT_PRODUCT:
      console.log(action.payload)
      return state
    case productActions.DELETE_PRODUCT:
      console.log(action.payload)
      return state
    default:
      return state
  }
}

export default products