import axios from "axios";

const SET_CART = "SET_CART";

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart,
  };
};

// GUEST CART THUNKS ...

// export const fetchCart = () => {
//   return  (dispatch) => {
//     //const { data } = await axios.get("/api/CART");
//     dispatch(setCart(data));
//   };
// };

// USER CART THUNKS ...

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case SET_CART:
      return {...state, cart: action.cart};
    default:
      return state;
  }
}
