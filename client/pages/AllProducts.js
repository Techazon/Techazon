import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/allProducts';
import { connect } from 'react-redux';
import { cartFuncs } from '../helperFuncs';
import { Link } from 'react-router-dom';

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const products = this.props.products;
    return (
      <div>
        <h2>Check out our retro gear!</h2>
        {products &&
          products.map((product) => (
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
              <button onClick={() => cartFuncs.clickAddToCart(product)}>
                Add to Cart
              </button>
              <button>Preview</button>
              <Link to={`/products/${product.id}`}>
                <button>View Details</button>
              </Link>
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
          ))}
      </div>
    );
  }
}

const mapState = ({ allProductsReducer }) => {
  return allProductsReducer;
};

const mapDispatch = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatch)(AllProducts);

// Using Hooks, just FYI
// const AllProducts = () => {
//     const products = useSelector(state => state.productReducer.products);
//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(fetchProducts())
//     }, [])

//     return (
//         <div>
//         <h2>Check out our retro gear!</h2>
//         {products &&
//           products.map((prod) => (
//             <div key={prod.id}>
//               <img src={prod.imageUrl} width="150px" height="150px" />
//               <div>Product Name: {prod.productName}</div>
//               <div>Price: {prod.price}</div>
//               {prod.stock ? (
//                 <div>Stock: {prod.stock}</div>
//               ) : (
//                 <div> SOLD OUT </div>
//               )}
//               {/* <div>{prod.description}</div> */}
//               <div>Category Name: {prod.category.categoryName}</div>
//               <button>Add to Cart</button>
//               <button>Preview</button>
//               <button>View Details</button>
//                 Quantity: <input />
//                 {/* //revist */}
//             </div>
//           ))}
//       </div>
//     )
// }
// export default AllProducts
