import * as actionTypes from "./myActionTypes";

const initialState = {
  products: [],
  isBusy: true
};

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.data };
    case actionTypes.SET_BUSY_STATUS:
      return { ...state, isBusy: action.data };
    default:
      return state;
  }
};
