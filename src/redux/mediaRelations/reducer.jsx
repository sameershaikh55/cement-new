import { MEDIA_RELATION, MEDIA_RELATION_SEARCH } from "./type";

const initialState = {
	mediaRelations: "",
	mediaRelationsSearch: "",
};

const mediaRelationsRed = (state = initialState, action) => {
	switch (action.type) {
		case MEDIA_RELATION:
			return {
				...state,
				mediaRelations: action.payload,
			};
		case MEDIA_RELATION_SEARCH:
			return {
				...state,
				mediaRelationsSearch: action.payload,
			};
		default:
			return state;
	}
};
export default mediaRelationsRed;
