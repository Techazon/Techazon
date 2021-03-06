import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct";
import { cartFuncs } from "../helperFuncs";

export class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }
  render() {
    const product = this.props.singleProduct;
    return (
      <div >
        {product && (
          <div className="single-product-container">
            <div className="single-product-image-container">
              <img src={product.imageUrl} />
            </div>
            <div className="single-product-info">
              <h2>{product.productName}</h2>
              <em id="descr">{product.description}</em>
              <p>${product.price / 100}</p>
              <button onClick={() => cartFuncs.clickAddToCart(product)}>
                Add to Cart
              </button>
              <div className='quantity-container'>
              Add Quantity:
              <select
                onChange={(event) => cartFuncs.clickQuantity(event, product)}
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
          </div>
        )}
      </div>
    );
  }
}

const mapState = ({ singleProductReducer }) => {
  return singleProductReducer;
};

const mapDispatch = (dispatch) => ({
  getProduct: (id) => dispatch(fetchSingleProduct(id)),
});

export default connect(mapState, mapDispatch)(SingleProduct);
