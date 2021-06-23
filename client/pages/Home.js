import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchCart } from "../store/cart";

/**
 * COMPONENT
 */
export const Home = (props) => {
  
  return (
    <div>
      <h3>Welcome {props.auth.firstName ? props.auth.firstName : "Guest"}</h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return state;
};

const mapDispatch = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart())
  }
}

export default connect(mapState,mapDispatch)(Home);
