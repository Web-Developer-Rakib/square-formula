import { combineReducers } from "redux";
import answersReducer from "./Reducers/answersReducer";
import aReducer from "./Reducers/aReducer";
import bReducer from "./Reducers/bReducer";
import cReducer from "./Reducers/cReducer";
export const rootReducer = combineReducers({
  aReducer: aReducer,
  bReducer: bReducer,
  cReducer: cReducer,
  answersReducer: answersReducer,
});
