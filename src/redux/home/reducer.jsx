import { HOME } from "./type";

const initialState = {
	home: "",
};

const homeRed = (state = initialState, action) => {
	switch (action.type) {
		case HOME:
			return {
				...state,
				home: action.payload,
			};
		default:
			return state;
	}
};
export default homeRed;
