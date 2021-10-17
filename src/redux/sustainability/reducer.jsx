import { SUSTAINABILITY } from "./type";

const initialState = {
	sustainability: "",
};

const sustainabilityRed = (state = initialState, action) => {
	switch (action.type) {
		case SUSTAINABILITY:
			return {
				...state,
				sustainability: action.payload,
			};
		default:
			return state;
	}
};
export default sustainabilityRed;
