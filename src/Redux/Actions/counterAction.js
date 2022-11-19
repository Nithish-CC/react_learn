import { INCREASE_AMOUNT, DECREASE_AMOUNT } from "../types/types";

export const deposit = (amount) => {
	return {
		type: INCREASE_AMOUNT,
		payloadData: amount,
	};
};

export const withDraw = (amount) => {
	return {
		type: DECREASE_AMOUNT,
		payloadData: amount,
	};
};
