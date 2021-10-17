import { MV } from "./type";

const initialState = {
	mv: "",
};

const mvRed = (state = initialState, action) => {
	switch (action.type) {
		case MV:
			return {
				...state,
				mv: action.payload,
			};
		default:
			return state;
	}
};
export default mvRed;
