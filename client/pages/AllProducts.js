import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/product";
import { connect } from "react-redux";

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
          products.map((prod) => (
            <div key={prod.id}>
              <img src={prod.imageUrl} width="150px" height="150px" />
              <div>Product Name: {prod.productName}</div>
              <div>Price: {prod.price}</div>
              {prod.stock ? (
                <div>Stock: {prod.stock}</div>
              ) : (
                <div> SOLD OUT </div>
              )}
              {/* <div>{prod.description}</div> */}
              <div>Category Name: {prod.category.categoryName}</div>
              <button>Add to Cart</button>
              <button>Preview</button>
              <button>View Details</button>
                Quantity: <input /> 
                {/* //revist */}
            </div>
          ))}
      </div>
    );
  }
}

const mapState = ({ productReducer }) => {
  return productReducer;
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
