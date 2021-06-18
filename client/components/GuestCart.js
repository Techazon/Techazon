import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/allProducts";
import { connect } from "react-redux";
import { cartFuncs } from "../helperFuncs";
import { Link } from "react-router-dom";

class GuestCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: JSON.parse(localStorage.getItem("cart")) };
    this.changeQuantity = this.changeQuantity.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);

  }

  changeQuantity(evt, product) {

    if(evt.target.value ==='decrease' && product.quantity > 1) product.quantity -= 1
    else if(evt.target.value === 'increase') product.quantity += 1;

    let cart = JSON.parse(localStorage.getItem('cart'))
    cart[product.id].quantity = product.quantity
    this.setState({cart: cart})
    
  }

  removeFromCart(product){
    let cart = JSON.parse(localStorage.getItem('cart'))
    delete cart[product.id]
    this.setState({cart: cart})
  }

  render() {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
    const { cart } = this.state;
    const cartIDs = Object.keys(cart);
    const cartProducts = Object.values(cart);

    let subTotal = 0;
    return (
      <div id="cartContainer">
        {cart &&
          cartProducts.map((curProduct, idx) => {
            const totalCost = curProduct.price * curProduct.quantity;
            subTotal += totalCost;
            return (
              <div key={cartIDs[idx]} className="individualCartProducts">
                <h3>{curProduct.productName}</h3>
                <img src={curProduct.imageUrl} width="150px" height="150px" />
                <p>Price: ${curProduct.price / 100}</p>
                <div className="productQuantity">
                  <button value='increase' onClick={(event)=>this.changeQuantity(event, curProduct)}>+</button>
                  <p>Quantity: {curProduct.quantity}</p>
                  <button value='decrease' onClick={(event)=>this.changeQuantity(event, curProduct)}>-</button>
                </div>
                <button onClick={()=>this.removeFromCart(curProduct)}>Remove from Cart</button>
                <p>Total Cost: ${totalCost / 100}</p>
              </div>
            );
          })}
        <div id="cartTotalContainer">
          <h3>Subtotal: ${subTotal / 100}</h3>
          {/* Have to put <Link to='/checkout'></Link around button */}
          {subTotal !== 0 && (
            <button id="checkoutButton">Proceed to Checkout</button>
          )}
        </div>
      </div>
    );
  }
}

export default GuestCart;