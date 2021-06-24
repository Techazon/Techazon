import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/allProducts";
import { addToCart, fetchCart, updateCartItem } from "../store/cart";
import { connect } from "react-redux";
import { cartFuncs } from "../helperFuncs";
import { Link } from "react-router-dom";

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  async addToCart(product) {
    if (!product.quantity) product.quantity = 1
    const foundProd = this.props.cart.products.find(prod => prod.id === product.id)
    
    if (foundProd){
      
      foundProd.quantity = +product.quantity + +foundProd.cart_product.quantity
      await this.props.updateCartItem({productId: foundProd.id, cartId: this.props.cart.id, quantity: foundProd.quantity})
      this.props.fetchCart()
    }
     else {this.props.addToCart(product)
    this.props.fetchCart()}
  }

  render() {
    const isLoggedIn = localStorage.getItem("token");
    const products = this.props.products.products;
    return (
      <div>
        <h2 id="retro">Check out our retro gear!</h2>
        <div id="product-container">
          {products &&
            products.map((product) => {
              return (
                <div key={product.id} className="product-cell">
                  <Link to={`/products/${product.id}`}>
                    <img src={product.imageUrl} />
                  </Link>
                  <div className="product-info">
                    <div>
                      <strong>{product.productName}</strong>
                    </div>
                    <div>${product.price / 100}</div>
                    {!product.stock && <div> SOLD OUT </div>}
                    {/* <div>Category: {product.category.categoryName}</div> */}
                  </div>
                  <div id="button-container">
                    <button
                      onClick={() => {
                        cartFuncs.clickAddToCart(product);
                        product.cartId = this.props.cart.id;
                        console.log('sfjkdh')
                        console.log(isLoggedIn)
                        isLoggedIn && this.addToCart(product);
                      }}
                    >
                      Add to Cart
                    </button>
                    <Link to={`/products/${product.id}`}>
                      <button>View Details</button>
                    </Link>
                  </div>
                  <div className="quantity-container">
                    Add Quantity:
                    <select
                      onChange={(event) => {
                        product.quantity = event.target.value;
                      }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapState = ({ allProductsReducer, cart }) => {
  return { products: allProductsReducer, cart };
};

const mapDispatch = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  addToCart: (product) => dispatch(addToCart(product)),
  updateCartItem: (product) => dispatch(updateCartItem(product)),
  fetchCart: ()=>dispatch(fetchCart())
});

export default connect(mapState, mapDispatch)(AllProducts);
