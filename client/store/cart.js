import axios from "axios";
const TOKEN = "token";

const SET_CART = "SET_CART";
const CREATE_CART = "CREATE_CART";
const ADD_TO_CART = "ADD_TO_CART";
const UPDATE_CART = "UPDATE_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

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

export const _removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    product,
  };
};

export const _updateCartItem = (product) => {
  return {
    type: UPDATE_CART,
    product,
  };
};

//Thunks
export const fetchCart = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem(TOKEN);
      const data = await axios.get(`/api/carts/activeCart`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(setCart(data.data));
    } catch (error) {
      if (error.response.status === 404) {
        dispatch(createCart());
        dispatch(fetchCart());
      }
    }
  };
};

export const createCart = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem(TOKEN);
      const { data } = await axios.post(
        "/api/carts",
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch(_createCart(data));
      
    } catch (error) {
      console.log("create cart error ---> ", error);
    }
  };
};

export const addToCart = (product) => {
  return async (dispatch) => {
    if (!product.quantity) product.quantity = 1
    try {
      const token = localStorage.getItem(TOKEN);
      const { data } = await axios.post(`/api/carts/addProduct`, product, {
        headers: {
          authorization: token,
        },
      });
      dispatch(_addToCart(product));
    } catch (error) {
      
      console.log(error.response.status);
    }
  };
};

export const removeFromCart = (product) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem(TOKEN);
      await axios.delete(`/api/carts/deleteProduct`, {
        headers: {
          authorization: token,
        },
        data: { product: product.cart_product },
      });
      dispatch(_removeFromCart(product));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCartItem = (product) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem(TOKEN)
      const { data } = await axios.put('/api/carts/', product, {
        headers: {
          authorization: token
        }
      })
      console.log('lskjdhfg')
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
      console.log('testfefr')
      return {...state, products: state.products.map((product) => (product.id === action.product.id ? action.product : product))}
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.product.id
        ),
      };
    default:
      return state;
  }
}
