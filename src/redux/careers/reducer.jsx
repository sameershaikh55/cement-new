import { CAREERS } from "./type";

const initialState = {
	career: "",
};

const careerRed = (state = initialState, action) => {
	switch (action.type) {
		case CAREERS:
			return {
				...state,
				career: action.payload,
			};
		default:
			return state;
	}
};
export default careerRed;
