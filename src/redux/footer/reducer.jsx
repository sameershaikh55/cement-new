import { FOOTER } from "./type";

const initialState = {
	footer: "",
};

const footerRed = (state = initialState, action) => {
	switch (action.type) {
		case FOOTER:
			return {
				...state,
				footer: action.payload,
			};
		default:
			return state;
	}
};
export default footerRed;
