import { CSR } from "./type";

const initialState = {
	csr: "",
};

const csrRed = (state = initialState, action) => {
	switch (action.type) {
		case CSR:
			return {
				...state,
				csr: action.payload,
			};
		default:
			return state;
	}
};
export default csrRed;
