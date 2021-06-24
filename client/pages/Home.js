import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchCart } from "../store/cart";

/**
 * COMPONENT
 */
export const Home = (props) => {
  return (
    <div id="welcome">
      <h3>Welcome {props.auth.firstName ? `${props.auth.firstName}!` : "!"}</h3>
      <div id="img-home">
        <img src="https://www.siliconindia.com/news/newsimages/special/kU182p4u.jpeg" />
      </div>
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
    fetchCart: () => dispatch(fetchCart()),
  };
};

export default connect(mapState, mapDispatch)(Home);
