import {
  FETCH_SELLER,
  REGISTER_SELLER_FAILED,
  FETCH_SELLER_NUMBER,
  INVALID_VERIFICATION_CODE,
  RESET_TOKEN_CHECK,
  FETCH_SELLER_PRODUCTS,
  FETCH_SELLER_ORDERS,
  FETCH_SELLER_ORDER_DETAILS
} from "../actions/types";

const INITIAL_STATE = {
  seller: null,
  sellerNumber: null,
  sellerRegisterError: null,
  errorVerifying: null,
  resetToken: null,
  sellerProducts: [],
  sellerOrders: [],
  sellerOrderDetails: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SELLER:
      return { ...state, seller: action.payload };
    case REGISTER_SELLER_FAILED:
      return {
        ...state,
        sellerRegisterError: action.payload
      };
    case FETCH_SELLER_NUMBER:
      return { ...state, sellerNumber: { number: action.payload } };
    case INVALID_VERIFICATION_CODE:
      return { ...state, errorVerifying: action.payload };
    case RESET_TOKEN_CHECK:
      return { ...state, resetToken: action.payload };
    case FETCH_SELLER_PRODUCTS:
      return { ...state, sellerProducts: action.payload };
    case FETCH_SELLER_ORDERS:
      return { ...state, sellerOrders: action.payload };
    case FETCH_SELLER_ORDER_DETAILS:
      return { ...state, sellerOrderDetails: action.payload };
    default:
      return state;
  }
};
