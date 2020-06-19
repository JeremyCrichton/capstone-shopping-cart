export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const receiveAllProducts = (data) => {
  return { type: RECEIVE_ALL_PRODUCTS, payload: data };
};

export const editProduct = (product) => {
  return { type: EDIT_PRODUCT, payload: product };
};

export const deleteProduct = (product) => {
  return { type: DELETE_PRODUCT, payload: product };
};

export const addProduct = (product) => {
  return { type: ADD_PRODUCT, payload: product };
};
