import * as actionTypes from "../actionTypes";

const InitalState = { b: "b" };
const answersReducer = (state = InitalState, action) => {
  switch (action.type) {
    case actionTypes.B:
      return {
        ...state,
        b: action.payload,
      };
    default:
      return state;
  }
};

export default answersReducer;
