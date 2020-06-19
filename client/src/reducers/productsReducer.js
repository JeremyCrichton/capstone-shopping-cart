import {
  RECEIVE_ALL_PRODUCTS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
} from "../actions/products";
import { ADD_TO_CART } from "../actions/cart";

const products = (state = [], action) => {
  let product;
  switch (action.type) {
    case ADD_TO_CART:
      product = action.payload
      if (state.length > 0) {
        return state.map(item => {
          if (item._id === product._id) {
            return { ...product, id: product._id }
          } else {
            return { ...item, id: item._id }
          }
        })
      } else {
        return [{ ...product, quantity: 1 }]
      }

    case RECEIVE_ALL_PRODUCTS:
      return action.payload;
    case EDIT_PRODUCT:
      product = action.payload
      return state.map(item => {
        if (item._id === product._id) {
          return product
        } else {
          return item
        }
      })
    case DELETE_PRODUCT:
      console.log(action.payload);
      return state;
    case ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default products;
