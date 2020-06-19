import React, { Component } from "react";
import CartItem from "./CartItem";
import { sum } from "../utils/helpers";

export default class Cart extends Component {
  render() {
    console.log(this.props);
    const { cart } = this.props;
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 && <p>Your cart is empty</p>}
        <table className="cart-items">
          <tbody>
            {cart.length !== 0 && (
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            )}
            {cart.length !== 0 &&
              cart.map((item) => <CartItem key={item._id} {...item} />)}
            <tr>
              <td colSpan="3" className="total">
                Total: ${sum(cart)}
              </td>
            </tr>
          </tbody>
        </table>
        <a
          onClick={this.props.handleClickCheckout}
          href="!#"
          className="button checkout disabled"
        >
          Checkout
        </a>
      </div>
    );
  }
}
