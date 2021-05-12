import { combineReducers } from "redux";

import auth from "./auth";
import question from "./question";

const rootReducer = combineReducers({
  auth,
  question,
});

export default rootReducer;
