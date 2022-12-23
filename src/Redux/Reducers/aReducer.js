import * as actionTypes from "../actionTypes";

const InitalState = { a: "a" };

const answersReducer = (state = InitalState, action) => {
  switch (action.type) {
    case actionTypes.A:
      return {
        ...state,
        a: action.payload,
      };
    default:
      return state;
  }
};

export default answersReducer;
