import { NUVOCO_GLANCE } from "./type";

const initialState = {
	nuvocoGlance: "",
};

const nuvocoGlanceRed = (state = initialState, action) => {
	switch (action.type) {
		case NUVOCO_GLANCE:
			return {
				...state,
				nuvocoGlance: action.payload,
			};
		default:
			return state;
	}
};
export default nuvocoGlanceRed;
