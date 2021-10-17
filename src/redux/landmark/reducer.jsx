import { LANDMARK } from "./type";

const initialState = {
	landmark: "",
};

const landmarkRed = (state = initialState, action) => {
	switch (action.type) {
		case LANDMARK:
			return {
				...state,
				landmark: action.payload,
			};
		default:
			return state;
	}
};
export default landmarkRed;
