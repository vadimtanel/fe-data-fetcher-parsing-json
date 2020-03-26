import * as actionTypes from "./myActionTypes";

export const setProducts = products => {
  return {
    type: actionTypes.SET_PRODUCTS,
    data: products
  };
};

export const setBusyStatus = isBusy => {
  return {
    type: actionTypes.SET_BUSY_STATUS,
    data: isBusy
  };
};
