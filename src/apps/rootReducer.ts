import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "~/features";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
