import {
  RECEIVE_ALL_PRODUCTS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
} from "../actions/products";

const products = (productState = [], action) => {
  console.log(productState, action);
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return action.payload;
    case EDIT_PRODUCT:
      console.log(action.payload);
      return productState;
    case DELETE_PRODUCT:
      return productState.filter((product) => product.id !== action.payload.id);
    case ADD_PRODUCT:
      return [...productState, action.payload];
    default:
      return productState;
  }
};

export default products;
