import React from "react";
import { connect } from "react-redux";
import { authenticateRegister } from "../store";

/**
 * COMPONENT
 */
const SignUp = (props) => {
  const { name, displayName, handleSubmit, error, firstName, lastName } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="firstName">
            <small>First Name</small>
          </label>
          <input name="firstName" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">
            <small>Last Name</small>
          </label>
          <input name="lastName" type="text" />
        </div>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */

const mapRegister = (state) => {
  return {
    name: "register",
    displayName: "Register",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const password = evt.target.password.value;
      dispatch(
        authenticateRegister(firstName, lastName, email, password, formName, history)
      );
    },
  };
};

export const Register = connect(mapRegister, mapDispatch)(SignUp);
