import axios from "axios";

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

/**
 * Thunk action creators
 */

export const sendAddProduct = (product) => {
  return (dispatch) => {
    return (
      axios
        .post(`/api/products`, product)
        .then((res) => {
          dispatch(addProduct(res.data));
        })
        // .then(() => {
        //   fetchPosts();
        // })
        .catch((err) => console.log(err))
    );
  };
};

// export const sendDeleteProduct = (product) => {};

// export const fetchPosts = () => {
//   return (dispatch) => {
//     dispatch(receiveAllProducts());

//     return axios.get("/api/products").then((data) => {
//       return dispatch(receiveAllProducts(data));
//     });
//   };
// };
