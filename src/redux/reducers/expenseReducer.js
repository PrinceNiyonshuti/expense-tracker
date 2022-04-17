/** @format */
import * as actionTypes from "../constants/action-types";

// Initial state
const initialState = {
	transactions: [],
};
export const expenseReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.DELETE_TRANSACTION:
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction.id !== action.payload
				),
			};
		case actionTypes.ADD_TRANSACTION:
			return {
				...state,
				transactions: [action.payload, ...state.transactions],
			};
		default:
			return state;
	}
};
