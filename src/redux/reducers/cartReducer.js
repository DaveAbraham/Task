export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_ITEMS_COUNT_IN_CART = 'INCREASE_ITEMS_COUNT_IN_CART';
export const DECREASE_ITEMS_COUNT_IN_CART = 'DECREASE_ITEMS_COUNT_IN_CART';
export const CLEAR_CART = 'CLEAR_CART';

//////////functions//////

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = indexNumber => {
  return {
    type: REMOVE_FROM_CART,
    payload: indexNumber,
  };
};
export const increaseItemsCountNumber = indexNumber => {
  return {
    type: INCREASE_ITEMS_COUNT_IN_CART,
    payload: indexNumber,
  };
};
export const decreaseItemsCountNumber = indexNumber => {
  return {
    type: DECREASE_ITEMS_COUNT_IN_CART,
    payload: indexNumber,
  };
};
/////initial state////////
const initalState = {
  cartItems: [],
};
///////////reducer
const CartReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // {console.log("first>>",action.payload);}
      return {
        ...state,

        cartItems: [...state.cartItems, action.payload],
      };
    case INCREASE_ITEMS_COUNT_IN_CART:
      const newArray1 = [...state.cartItems];
      newArray1[action.payload].itemsInCart += 1;
      return {
        ...state,
        cartItems: newArray1,
      };
    case DECREASE_ITEMS_COUNT_IN_CART:
      const newArray = [...state.cartItems];
      newArray[action.payload].itemsInCart -= 1;
      return {
        ...state,
        cartItems: newArray,
      };
    case REMOVE_FROM_CART:
      let newArray3 = [...state.cartItems];
      newArray3.splice(action.payload, 1);
      return {
        ...state,
        cartItems: newArray3,
      };

    case CLEAR_CART:
      return {...state, cartItems: []};
    default:
      return {...state};
  }
};
export default CartReducer;
