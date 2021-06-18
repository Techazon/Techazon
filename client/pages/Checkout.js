import React from "react";
import { Link } from "react-router-dom";

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: Object.values(JSON.parse(localStorage.getItem("cart"))),
    };
  }

  render() {
    const shipping = 2199;
    const tax = 879;
    const cartArray = this.state.cart;
    const total = cartArray.reduce((acc, cartItem) => {
      return (acc += cartItem.price * 100 * cartItem.quantity);
    }, 0);
    const mappedCart = cartArray.map((cartItem) => (
      <div key={cartItem.id}>
        <img src={cartItem.imageUrl} width="150px" height="150px" />
        <div>Product Name: {cartItem.productName}</div>
        <div>Category: {cartItem.categoryName}</div>
        <div>
          Total Price: {(cartItem.price * 100 * cartItem.quantity) / 100}
        </div>
        <div>Quantity: {cartItem.quantity}</div>
      </div>
    ));
    console.log(cartArray);
    return (
      <div>
        <div id="cartInCheckout">
          {cartArray.length === 0 ? (
            <div>Your Cart Is Empty</div>
          ) : (
            <div>
              <br />
              <div>
                <h2>Order Summary</h2>
                <h4>Sub-Total: {total / 100}</h4>
                <h4>Shipping: ${shipping / 100}</h4>
                <h4>Tax: ${tax / 100}</h4>
                <h3>Total: ${(total + (shipping + tax)) / 100}</h3>
                <br />
                <button id="order" type="submit">
                  <Link to="/guestordercomplete">Order Now!!</Link>
                </button>
              </div>
              <div>
                <br />
                <h1>Your Cart</h1>
              </div>
              <div>{mappedCart}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
