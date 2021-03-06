import {
  RECEIVE_ALL_PRODUCTS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
} from "../actions/products";
import { ADD_TO_CART } from "../actions/cart";

const products = (productState = [], action) => {
  let product;
  console.log(productState, action);
  switch (action.type) {
    case ADD_TO_CART:
      product = action.payload;
      if (productState.length > 0) {
        return productState.map((item) => {
          if (item._id === product._id) {
            return { ...product, id: product._id };
          } else {
            return { ...item, id: item._id };
          }
        });
      } else {
        return [{ ...product, quantity: 1 }];
      }

    case RECEIVE_ALL_PRODUCTS:
      return action.payload;
    case EDIT_PRODUCT:
      product = action.payload;
      return productState.map((item) => {
        if (item._id === product._id) {
          return { ...product, id: product._id };
        } else {
          return { ...item, id: item._id };
        }
      });
    case DELETE_PRODUCT:
      return productState.filter((product) => product._id !== action.payload);
    case ADD_PRODUCT:
      return [...productState, action.payload];
    default:
      return productState;
  }
};

export default products;
