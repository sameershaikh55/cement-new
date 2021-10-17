import { IC } from "./type";

const initialState = {
	ic: "",
};

const icRed = (state = initialState, action) => {
	switch (action.type) {
		case IC:
			return {
				...state,
				ic: action.payload,
			};
		default:
			return state;
	}
};
export default icRed;
