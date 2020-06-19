import { connect } from "react-redux";
import Product from "./Product";
import axios from "axios";
import { ADD_TO_CART } from "../actions/cart";

const mapStateToProps = (state) => ({
  //
});

const mapDispatchToProps = (dispatch) => ({
  handleAddItemToCart: (e) => {
    e.preventDefault();
    const product = {
      _id: this.props._id,
      title: this.props.title,
      quantity: this.props.quantity - 1,
      price: this.props.price,
    };
    axios.put(`/api/products/${this.props._id}`, product).then((res) => {
      dispatch({ type: ADD_TO_CART, payload: res.data });
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
