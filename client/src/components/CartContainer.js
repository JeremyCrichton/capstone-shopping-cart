import { connect } from "react-redux";
import Cart from "./Cart";
import { emptyCart } from "../actions/cart";

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  handleClickCheckout: (e) => {
    e.preventDefault();
    dispatch(emptyCart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
