import { CONTACT } from "./type";

const initialState = {
	contact: "",
};

const contactRed = (state = initialState, action) => {
	switch (action.type) {
		case CONTACT:
			return {
				...state,
				contact: action.payload,
			};
		default:
			return state;
	}
};
export default contactRed;
