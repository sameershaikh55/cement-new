import { BOARD_DIRECTORS } from "./type";

const initialState = {
	boardDirectors: "",
};

const boardDirectorsRed = (state = initialState, action) => {
	switch (action.type) {
		case BOARD_DIRECTORS:
			return {
				...state,
				boardDirectors: action.payload,
			};
		default:
			return state;
	}
};
export default boardDirectorsRed;
