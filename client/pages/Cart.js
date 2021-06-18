import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/allProducts';
import { connect } from 'react-redux';
import { cartFuncs } from '../helperFuncs';
import { Link } from 'react-router-dom';
import GuestCart from '../components/GuestCart'
import UserCart from '../components/UserCart'


class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

//   componentDidMount() {

// }

  render() {
    const isLoggedIn = false // false by default to trigger GuestCart
    return (
        <div>
            {isLoggedIn ? <UserCart/> : <GuestCart/>}
        </div>
    );
  }
}

// const mapState = ({ allProductsReducer }) => {
//   return allProductsReducer;
// };

// const mapDispatch = (dispatch) => ({
//   fetchProducts: () => dispatch(fetchProducts()),
// });

export default Cart;//connect(mapState, mapDispatch)(Cart);