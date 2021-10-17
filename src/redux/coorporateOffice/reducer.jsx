import { CORPORATE_OFFICE } from "./type";

const initialState = {
	corporateOffice: "",
};

const corporateOfficeRed = (state = initialState, action) => {
	switch (action.type) {
		case CORPORATE_OFFICE:
			return {
				...state,
				corporateOffice: action.payload,
			};
		default:
			return state;
	}
};
export default corporateOfficeRed;
