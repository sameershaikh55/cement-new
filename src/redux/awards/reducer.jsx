import { AWARDS } from "./type";

const initialState = {
	awards: "",
};

const awardsRed = (state = initialState, action) => {
	switch (action.type) {
		case AWARDS:
			return {
				...state,
				awards: action.payload,
			};
		default:
			return state;
	}
};
export default awardsRed;
