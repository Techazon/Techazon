import axios from "axios";

const SET_SINGLE_PRODUCT = "SET_SINGLE_PRODUCT"

export const setSingleProduct = (singleProduct) => {
  return {
    type: SET_SINGLE_PRODUCT,
    singleProduct,
  };
};

export const fetchSingleProduct = (productId) => {
  return async (dispatch) => {
  try {
      const { data } = await axios.get(`/api/products/${productId}`);
      dispatch(setSingleProduct(data));
    } catch (error) {
      console.log(error)
    }
  };
};

export default function singleProductReducer(state = {}, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return {...state, singleProduct: action.singleProduct};
    default:
      return state;
  }
}
