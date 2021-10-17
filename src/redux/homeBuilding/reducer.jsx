import { BUILDING } from "./type";

const initialState = {
	building: "",
};

const buildingRed = (state = initialState, action) => {
	switch (action.type) {
		case BUILDING:
			return {
				...state,
				building: action.payload,
			};
		default:
			return state;
	}
};
export default buildingRed;
