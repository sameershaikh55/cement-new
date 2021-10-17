import { ENVIRONMENT, ENVIRONMENT_SEARCH } from "./type";

const initialState = {
	environment: "",
	environmentSearch: "",
};

const environmentRed = (state = initialState, action) => {
	switch (action.type) {
		case ENVIRONMENT:
			return {
				...state,
				environment: action.payload,
			};
		case ENVIRONMENT_SEARCH:
			return {
				...state,
				environmentSearch: action.payload,
			};
		default:
			return state;
	}
};
export default environmentRed;
