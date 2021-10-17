import { COVID } from "./type";

const initialState = {
	covid: "",
};

const covidRed = (state = initialState, action) => {
	switch (action.type) {
		case COVID:
			return {
				...state,
				covid: action.payload,
			};
		default:
			return state;
	}
};
export default covidRed;
