import { MANUFACTURING_UNIT } from "./type";

const initialState = {
	manufacturing: "",
};

const manufacturingRed = (state = initialState, action) => {
	switch (action.type) {
		case MANUFACTURING_UNIT:
			return {
				...state,
				manufacturing: action.payload,
			};
		default:
			return state;
	}
};
export default manufacturingRed;
