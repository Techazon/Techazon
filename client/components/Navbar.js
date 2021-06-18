import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => {

  return(
  <div id='navContainer'>
    <nav>
      <div id='navLinks'>
        <h1>Techazon</h1>
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <a href="#" onClick={handleClick} id='logoutButton'>
            Logout
          </a>
        </div>
      ) : (
        <div id="navButtons">
          {/* The navbar will show these links before you log in */}
          <Link to="/login" id="loginButton">
            Log in
          </Link>
          <Link to="/register" id="registerButton">
            Register
          </Link>
        </div>
      )}
    </nav>
    {/* <hr /> */}
  </div>)
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
