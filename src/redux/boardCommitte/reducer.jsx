import { BOARD_COMMITTEE } from "./type";

const initialState = {
	boardCommittee: "",
};

const boardCommitteeRed = (state = initialState, action) => {
	switch (action.type) {
		case BOARD_COMMITTEE:
			return {
				...state,
				boardCommittee: action.payload,
			};
		default:
			return state;
	}
};
export default boardCommitteeRed;
