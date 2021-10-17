import { PRODUCT_DETAILS, PRODUCT_DETAILS_PAGE } from "./type";

const initialState = {
	productDetails: "",
	productDetailsPage: "",
};

const productDetailsRed = (state = initialState, action) => {
	switch (action.type) {
		case PRODUCT_DETAILS:
			return {
				...state,
				productDetails: action.payload,
			};
		case PRODUCT_DETAILS_PAGE:
			return {
				...state,
				productDetailsPage: action.payload,
			};
		default:
			return state;
	}
};
export default productDetailsRed;
