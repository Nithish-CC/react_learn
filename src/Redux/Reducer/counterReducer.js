import { INCREASE_AMOUNT, DECREASE_AMOUNT } from "../types/types";

const InitialValue = {
	userAmount: 0,
	userTotalTransactions: 0,
	userDeposited: 0,
	userWithDrawelled: 0,
};

export const counterReducer = (state = InitialValue, action) => {
	const { type, payloadData } = action;

	switch (type) {
		case INCREASE_AMOUNT:
			return {
				...state,
				userAmount: state.userAmount + payloadData,
				userTotalTransactions: state.userTotalTransactions + 1,
				userDeposited: state.userDeposited + 1,
			};
		case DECREASE_AMOUNT:
			return {
				...state,
				userAmount: state.userAmount - action.payloadData,
				userTotalTransactions: state.userTotalTransactions + 1,
				userWithDrawelled: state.userWithDrawelled + 1,
			};
		default:
			return state;
	}
};
