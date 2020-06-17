import React from "react";
import CartItem from "./CartItem";
import { sum } from "../utils/helpers";

export default function Cart({ cartItems }) {
  // Add helpers/calculateTotal

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <p>Your cart is empty</p>
      <table className="cart-items">
        <tbody>
          {cartItems.length !== 0 && (
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          )}
          {cartItems.length !== 0 &&
            cartItems.map((item) => <CartItem key={item._id} {...item} />)}
          <tr>
            <td colSpan="3" className="total">
              Total: ${sum(cartItems)}
            </td>
          </tr>
        </tbody>
      </table>
      <a href="!#" className="button checkout disabled">
        Checkout
      </a>
    </div>
  );
}
