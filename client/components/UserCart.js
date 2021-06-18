import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/allProducts';
import { connect } from 'react-redux';
import { cartFuncs } from '../helperFuncs';
import { Link } from 'react-router-dom';

class UserCart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

}

  render() {
    const products = this.props.products;
    const isLoggedIn = false
    return (
        <p>User Cart</p>
    );
  }
}

const mapState = ({ allProductsReducer }) => {
  return allProductsReducer;
};

const mapDispatch = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatch)(UserCart);