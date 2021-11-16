import { BLOG, BLOG_SINGLE } from "./type";

const initialState = {
	blog: "",
	blogSingle: "",
};

const blogRed = (state = initialState, action) => {
	switch (action.type) {
		case BLOG:
			return {
				...state,
				blog: action.payload,
			};
		case BLOG_SINGLE:
			return {
				...state,
				blogSingle: action.payload,
			};
		default:
			return state;
	}
};
export default blogRed;
