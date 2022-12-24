import { combineReducers } from "redux";
import answersReducer from "./Reducers/answersReducer";
import aReducer from "./Reducers/aReducer";
import bReducer from "./Reducers/bReducer";
export const rootReducer = combineReducers({
  aReducer: aReducer,
  bReducer: bReducer,
  answersReducer: answersReducer,
});
