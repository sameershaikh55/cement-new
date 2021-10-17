import { HEALTH_SAFETY } from "./type";

const initialState = {
	healthSafety: "",
};

const healthSafetyRed = (state = initialState, action) => {
	switch (action.type) {
		case HEALTH_SAFETY:
			return {
				...state,
				healthSafety: action.payload,
			};
		default:
			return state;
	}
};
export default healthSafetyRed;
