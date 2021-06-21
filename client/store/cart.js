import axios from "axios";
const TOKEN = localStorage.getItem("token");


const SET_CART = "SET_CART";
const CREATE_CART = "CREATE_CART"
const ADD_TO_CART = "ADD_TO_CART"
const UPDATE_CART_PRODUCT = "UPDATE_CART_PRODUCT"

// Actions
export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart,
  };
};

export const _createCart = (cart) => {
  return {
    type: CREATE_CART,
    cart,
  };
};

export const _addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};

export const _updateCartItem = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};

//Thunks
export const fetchCart = (id) => {
  return async (dispatch) => {
    console.log('fetching cart')
    const { data } = await axios.get(`/api/users/${id}/activeCart`, {
      headers: {
        authorization: TOKEN,
      },
    });
    data.products.map(product => product.quantity = product.cart_product.quantity)
    dispatch(setCart(data));
  };
};

export const createCart = () => {
  return async (dispatch) => {
    console.log('in thunk for create cart')
    console.log(TOKEN)
    const { data } = await axios.post("/api/carts",{
      headers: {
        authorization: TOKEN,
      },
    });
    
    dispatch(_createCart(data));
  };
};

export const addToCart = (cart, product) => {
  return async (dispatch) => {
    const { data } = await axios.post(`/api/carts/${cart.id}`, product)
    dispatch(_addToCart(data));
  };
};

// export const updateCartItem = (cart, product) => {
//   return async (dispatch) => {
//     const 

//     dispatch(setCart(data));
//   };
// };


// Reducer
export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case CREATE_CART:
      return action.cart;
    case ADD_TO_CART:
      return action.cart;
    case UPDATE_CART_PRODUCT:
      return action.cart;
    default:
      return state;
  }
}
