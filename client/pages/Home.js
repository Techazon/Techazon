import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchCart } from "../store/cart";

/**
 * COMPONENT
 */
export const Home = (props) => {
  
  return (
    <div>
      <h3>Welcome {props.auth.firstName ? props.auth.firstName : "Guest"},</h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return state;
};

export default connect(mapState)(Home);
