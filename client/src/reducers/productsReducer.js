import {
  RECEIVE_ALL_PRODUCTS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
} from "../actions/products";

const products = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return action.payload;
    case EDIT_PRODUCT:
      console.log(action.payload);
      return state;
    case DELETE_PRODUCT:
      console.log(action.payload);
      return state;
    case ADD_PRODUCT:
      console.log("add product reducer");
      return [...state, action.payload];
    default:
      return state;
  }
};

export default products;
