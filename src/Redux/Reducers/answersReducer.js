import * as actionTypes from "../actionTypes";

const InitalState = {
  ans: "?",
};

const answersReducer = (state = InitalState, action) => {
  switch (action.type) {
    case actionTypes.ANSWER:
      return {
        ...state,
        ans: action.payload ** 2,
      };
    default:
      return state;
  }
};

export default answersReducer;
