import * as actionTypes from "./actionTypes";

export const aValue = (value) => {
  return { type: actionTypes.A, payload: value };
};
export const bValue = (value) => {
  return { type: actionTypes.B, payload: value };
};

export const Answer = (value) => {
  return { type: actionTypes.ANSWER, payload: value };
};
