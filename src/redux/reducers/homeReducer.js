export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const GET_PRODUCT_DETAIL_SUCCESS = 'GET_PRODUCT_DETAIL_SUCCESS';
export const GET_PRODUCT_DETAIL_ERROR = 'GET_PRODUCT_DETAIL_ERROR';

//////////functions//////

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
export const getProductsSuccess = data => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data,
  };
};
export const getProductsError = data => {
  return {
    type: GET_PRODUCTS_ERROR,
    payload: data,
  };
};
export const getProductDetail = id => {
  return {
    type: GET_PRODUCT_DETAIL,
    payload: id,
  };
};
export const getProductDetailSuccess = data => {
  return {
    type: GET_PRODUCT_DETAIL_SUCCESS,
    payload: data,
  };
};
export const getProductDetailError = data => {
  return {
    type: GET_PRODUCTS_DETAIL_ERROR,
    payload: data,
  };
};

/////initial state////////
/////////////////////////
const initalState = {
  receivedProducts: [],
  productDetail: {},
  error: false,
  loading: false,
  message: null,
};
///////////reducer////////////////
/////////////////////////////////
const homeReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        receivedProducts: action.payload,
      };

    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload,
      };
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetail: action.payload,
      };

    case GET_PRODUCT_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload,
      };

    default:
      return {...state};
  }
};
export default homeReducer;
