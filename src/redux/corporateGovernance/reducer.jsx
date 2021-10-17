import { CORPORATE_GOVERNANCE, CORPORATE_GOVERNANCE_SEARCH } from "./type";

const initialState = {
	corporateGovernance: "",
	corporateGovernanceSearch: "",
};

const corporateGovernanceRed = (state = initialState, action) => {
	switch (action.type) {
		case CORPORATE_GOVERNANCE:
			return {
				...state,
				corporateGovernance: action.payload,
			};
		case CORPORATE_GOVERNANCE_SEARCH:
			return {
				...state,
				corporateGovernanceSearch: action.payload,
			};
		default:
			return state;
	}
};
export default corporateGovernanceRed;
