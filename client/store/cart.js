import axios from "axios";
const TOKEN = "token";

const SET_CART = "SET_CART";
const CREATE_CART = "CREATE_CART";
const ADD_TO_CART = "ADD_TO_CART";
const UPDATE_CART = "UPDATE_CART";

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
  console.log('yo')
  return {
    type: UPDATE_CART,
    product,
  };
};

//Thunks
export const fetchCart = () => {
  return async (dispatch) => {
    const token = localStorage.getItem(TOKEN);
    console.log("fetching cart");
    try {
      const data = await axios.get(`/api/carts/activeCart`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(setCart(data.data));
    } catch (error) {
        if (error.response.status === 404) {
          dispatch(createCart())
        }
    }
  };
};

export const createCart = () => {
  return async (dispatch) => {
    const token = localStorage.getItem(TOKEN);
    console.log("in thunk for create cart");
    console.log(token);
    try {
      const { data } = await axios.post("/api/carts", {}, {
        headers: {
          authorization: token,
        },
      });
      console.log(data)
      dispatch(_createCart(data));
    } catch (error) {
      console.log("create cart error ---> ", error);
    }
  };
};

export const addToCart = (product) => {
  return async (dispatch) => {
    const token = localStorage.getItem(TOKEN);
    if (!product.quantity) product.quantity = 1
    console.log(product)
    console.log('sup')
    try {
      const { data } = await axios.post(`/api/carts/addProduct`, product, {
        headers: {
          authorization: token,
        }
      });
      dispatch(_addToCart(product));
      
    } catch (error) {
      console.log(error)
    }
  };
};

export const updateCartItem = (product) => {
  return async (dispatch) => {
    console.log('updating cart', product)
    const token = localStorage.getItem(TOKEN)
    try {
      const { data } = await axios.put('/api/carts/', product, {
        headers: {
          authorization: token
        }
      })
      dispatch(_updateCartItem(product));
    } catch (error) {
      console.log(error)
    }
  };
};

// Reducer
export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case CREATE_CART:
      return action.cart;
    case ADD_TO_CART:
      if (!state.products) state.products = []
      return {...state, products: [...state.products, action.product]}
    case UPDATE_CART:
      return {...state, products: [...state.products, action.product]}
    default:
      return state;
  }
}
