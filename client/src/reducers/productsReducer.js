import {
  RECEIVE_ALL_PRODUCTS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
} from "../actions/products";
import { ADD_TO_CART } from "../actions/cart";

<<<<<<< HEAD
const products = (state = [], action) => {
  let product;
=======
const products = (productState = [], action) => {
  console.log(productState, action);
>>>>>>> 1d7976c6b6ac284a8c8c92a67c2f2c6c6c33e15a
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
<<<<<<< HEAD
      product = action.payload
      return state.map(item => {
        if (item._id === product._id) {
          return product
        } else {
          return item
        }
      })
=======
      console.log(action.payload);
      return productState;
>>>>>>> 1d7976c6b6ac284a8c8c92a67c2f2c6c6c33e15a
    case DELETE_PRODUCT:
      return productState.filter((product) => product.id !== action.payload.id);
    case ADD_PRODUCT:
<<<<<<< HEAD
      return [...state, action.payload];
=======
      return [...productState, action.payload];
>>>>>>> 1d7976c6b6ac284a8c8c92a67c2f2c6c6c33e15a
    default:
      return productState;
  }
};

export default products;
