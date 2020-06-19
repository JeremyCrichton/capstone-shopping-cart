import { connect } from "react-redux";
import Product from "./Product";
import axios from "axios";
import { ADD_TO_CART } from "../actions/cart";
import { deleteProduct } from "../actions/products";

const mapDispatchToProps = (dispatch, props) => ({
  handleAddItemToCart: (e) => {
    e.preventDefault();
    const product = {
      _id: props._id,
      title: props.title,
      quantity: props.quantity - 1,
      price: props.price,
    };
    axios.put(`/api/products/${props._id}`, product).then((res) => {
      dispatch({ type: ADD_TO_CART, payload: res.data });
    });
  },
  handleDeleteItem: (e) => {
    e.preventDefault();
    const id = props._id;
    // probably want to move this to the reducers
    axios.delete(`/api/products/${id}`).then((_) => {
      dispatch(deleteProduct(id));
    });
  },
});

export default connect(null, mapDispatchToProps)(Product);
