import React from "react";
import { connect } from "react-redux";

export const GuestOrderComplete = (props) => {
  const { username } = props;
  localStorage.setItem("cart", JSON.stringify([]));
  return (
    <div>
      <h3>Thank you for your order {username ? `${username}!!` : "Guest!!"}</h3>
      <h2>Your Order Confirmation Number: 13456789</h2>
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.firstName,
  };
};

export default connect(mapState)(GuestOrderComplete);
