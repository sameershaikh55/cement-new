import { IC } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const icFunc = (data) => {
	return {
		type: IC,
		payload: data,
	};
};

export const icApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/InvestorContact").then((res) => {
			dispatch(icFunc(res.data));
		});
	};
};
