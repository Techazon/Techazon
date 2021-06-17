import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/product";
import { connect } from "react-redux";

class AllProducts extends React.Component {
  constructor(props) {
    super(props);

    this.clickQuantity = this.clickQuantity.bind(this)
    this.clickAddToCart = this.clickAddToCart.bind(this)
  }
  componentDidMount() {
    this.props.fetchProducts();
  }

  clickQuantity(e, prod){
    prod.quantity = Number(e.target.value)
  }

  clickAddToCart(prod){
    // function handles adding product to a cart or updating quantity if product is already in a cart
    
    if (!prod.quantity){
      prod.quantity = 1
    }
    
    const { id, imageUrl, price, productName, quantity} = prod
    let cartInfo = JSON.parse(localStorage.getItem('cart'))

    if (!cartInfo[id]){
      cartInfo[id] = {imageUrl, price, productName, quantity}
    } else {
      cartInfo[id].quantity += Number(quantity)
    }

    localStorage.setItem('cart', JSON.stringify(cartInfo))

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
              <button onClick={() => this.clickAddToCart(prod)}>Add to Cart</button>
              <button>Preview</button>
              <button>View Details</button>
              Quantity:<select onChange={(e) => this.clickQuantity(e, prod)}> 
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  </select> 
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
