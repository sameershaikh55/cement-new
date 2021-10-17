import { MENU } from "./type";

const initialState = {
	menu: "",
};

const menuRed = (state = initialState, action) => {
	switch (action.type) {
		case MENU:
			return {
				...state,
				menu: action.payload,
			};
		default:
			return state;
	}
};
export default menuRed;
