import * as actionTypes from "../actionTypes";

const InitalState = { c: "c" };
const answersReducer = (state = InitalState, action) => {
  switch (action.type) {
    case actionTypes.C:
      return {
        ...state,
        c: action.payload,
      };
    default:
      return state;
  }
};

export default answersReducer;
