/** @format */

import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { expenseReducer } from "./expenseReducer";

export const rootReducer = combineReducers({
	counterState: counterReducer,
});
