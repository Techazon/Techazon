import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, createCart, removeFromCart, updateCartItem } from "../store/cart";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(localStorage.getItem("cart")),
      loggedIn: this.props.auth.id ? true : false,
    };
    this.changeQuantity = this.changeQuantity.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentDidMount() {
    this.state.loggedIn && this.props.fetchCart()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.cart !== this.props.cart) this.props.fetchCart()
  }

  changeQuantity(evt, product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    
    let currProd = cart.find((item) => item.id === product.id);
    currProd.quantity = +currProd.quantity
    if (!currProd.quantity) currProd.quantity = 1;
    if (product.cart_product) {
      currProd.quantity = product.cart_product.quantity
    }
    if (evt.target.value === "decrease") {
      if (currProd.quantity > 1) currProd.quantity -= 1;
    } else if (evt.target.value === "increase") currProd.quantity += 1;
    if (this.props.auth.id) {
      currProd.cartId = this.props.cart.id
      const updatedProduct = {
        cartId: currProd.cartId, quantity: currProd.quantity, productId: currProd.id
      }
      this.props.updateCartItem(updatedProduct)
    }

    this.setState({ cart: cart });
  }

  removeFromCart(product) {
    // We can probably just use state since we already got the cart
    if (this.props.auth.id) {
      this.props.removeFromCart(product);
      console.log(product);
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    let newCart = cart.filter((item) => item.id !== product.id);
    this.setState({ cart: newCart });
  }

  render() {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));

    const token = localStorage.getItem('token')

    let activeCart = this.state.loggedIn
      ? this.props.cart.products && this.props.cart.products
      : JSON.parse(localStorage.getItem("cart"));

    let subTotal = 0;
    return (
      <div>
        {activeCart &&
          activeCart.map((product) => {
            const quantity = product.cart_product ? product.cart_product.quantity : product.quantity;
            const totalCost = product.price * quantity;
            subTotal += totalCost;
            return (
              <div key={product.id} className="individualCartProducts">
                <h3>{product.productName}</h3>
                <img src={product.imageUrl} width="150px" height="150px" />
                <p>Price: ${product.price / 100}</p>
                <div className="productQuantity">
                  <button
                    value="increase"
                    onClick={(event) => {
                      this.changeQuantity(event, product)
                    }}
                  >
                    +
                  </button>
                  <p>Quantity: {quantity}</p>
                  <button
                    value="decrease"
                    onClick={(event) => {
                      this.changeQuantity(event, product)
                    }}
                  >
                    -
                  </button>
                </div>
                <button
                  onClick={() => {
                    this.removeFromCart(product);
                  }}
                >
                  Remove from Cart
                </button>
                <p>Total Cost: ${totalCost / 100}</p>
              </div>
            );
          })}
        <div id="cartTotalContainer">
          <h3>Subtotal: ${subTotal / 100}</h3>
          {/* Have to put <Link to='/checkout'></Link around button */}
          {subTotal !== 0 && (
            <Link to="/checkout">
              <button id="checkoutButton">Proceed to Checkout</button>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

const mapState = ({ auth, cart }) => {
  return { auth, cart };
};

const mapDispatch = (dispatch) => ({
  createCart: () => dispatch(createCart()),
  fetchCart: () => dispatch(fetchCart()),
  updateCartItem: (product) => dispatch(updateCartItem(product)),
  removeFromCart: (product) => dispatch(removeFromCart(product)),
});

export default connect(mapState, mapDispatch)(Cart);
