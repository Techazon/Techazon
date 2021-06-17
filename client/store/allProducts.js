import axios from "axios";

const SET_PRODUCTS = "SET_PRODUCTS";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/products");
    dispatch(setProducts(data));
  };
};

export default function allProductsReducer(state = {}, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.products};
    default:
      return state;
  }
}
