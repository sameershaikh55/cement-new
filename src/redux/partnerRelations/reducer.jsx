import { PARTNER_RELATION, PARTNER_RELATION_DETAIL } from "./type";

const initialState = {
	partnerRelations: "",
	partnerRelationsDetail: "",
};

const partnerRelationsRed = (state = initialState, action) => {
	switch (action.type) {
		case PARTNER_RELATION:
			return {
				...state,
				partnerRelations: action.payload,
			};
		case PARTNER_RELATION_DETAIL:
			return {
				...state,
				partnerRelationsDetail: action.payload,
			};
		default:
			return state;
	}
};
export default partnerRelationsRed;
