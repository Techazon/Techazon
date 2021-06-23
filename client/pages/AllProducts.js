import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/allProducts";
import { addToCart, fetchCart } from "../store/cart";
import { connect } from "react-redux";
import { cartFuncs } from "../helperFuncs";
import { Link } from "react-router-dom";

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const products = this.props.products.products;
    return (
      <div>
        <h2>Check out our retro gear!</h2>
        {products &&
          products.map((product) => {
            product.quantity = 1;
            return (
              <div key={product.id}>
                <img src={product.imageUrl} width="150px" height="150px" />
                <div>Product Name: {product.productName}</div>
                <div>Price: ${product.price / 100}</div>
                {product.stock ? (
                  <div>Stock: {product.stock}</div>
                ) : (
                  <div> SOLD OUT </div>
                )}
                {/* <div>{prod.description}</div> */}
                <div>Category Name: {product.category.categoryName}</div>
                <button
                  onClick={() => {
                    cartFuncs.clickAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
                <button>Preview</button>
                <Link to={`/products/${product.id}`}>
                  <button>View Details</button>
                </Link>
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
            );
          })}
      </div>
    );
  }
}

const mapState = ({ allProductsReducer, cartReducer }) => {
  return { products: allProductsReducer, cart: cartReducer };
};

const mapDispatch = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  // addToCart: (cart, product) => dispatch(addToCart(cart, product)),
});

export default connect(mapState, mapDispatch)(AllProducts);