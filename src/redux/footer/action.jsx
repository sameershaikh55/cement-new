import { FOOTER } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const footerFunc = (data) => {
	return {
		type: FOOTER,
		payload: data,
	};
};

export const footerApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/footer?lang=en").then((res) => {
			dispatch(footerFunc(res.data));
		});
	};
};
