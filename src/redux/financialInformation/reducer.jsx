import { FINANCIAL_INFORMATION, FINANCIAL_INFORMATION_SEARCH } from "./type";

const initialState = {
	financialInformation: "",
	financialInformationSearch: "",
};

const financialInformationRed = (state = initialState, action) => {
	switch (action.type) {
		case FINANCIAL_INFORMATION:
			return {
				...state,
				financialInformation: action.payload,
			};
		case FINANCIAL_INFORMATION_SEARCH:
			return {
				...state,
				financialInformationSearch: action.payload,
			};
		default:
			return state;
	}
};
export default financialInformationRed;
