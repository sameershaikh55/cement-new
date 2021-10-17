import { MANAGEMENT_TEAM } from "./type";

const initialState = {
	managementTeam: "",
};

const managementRed = (state = initialState, action) => {
	switch (action.type) {
		case MANAGEMENT_TEAM:
			return {
				...state,
				managementTeam: action.payload,
			};
		default:
			return state;
	}
};
export default managementRed;
