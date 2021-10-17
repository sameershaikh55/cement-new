import { INNOVATION_CENTRE } from "./type";

const initialState = {
	innovationCentre: "",
};

const innovationCentreRed = (state = initialState, action) => {
	switch (action.type) {
		case INNOVATION_CENTRE:
			return {
				...state,
				innovationCentre: action.payload,
			};
		default:
			return state;
	}
};
export default innovationCentreRed;
