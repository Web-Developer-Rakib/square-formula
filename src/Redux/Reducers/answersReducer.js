import * as actionTypes from "../actionTypes";

const InitalState = "";
const answersReducer = (state = InitalState, action) => {
  switch (action.type) {
    case actionTypes.Answer:
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};

export default answersReducer;
