import { AWARDS } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const awardsFunc = (data) => {
	return {
		type: AWARDS,
		payload: data,
	};
};

export const awardsApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/awards-recognition?lang=en").then((res) => {
			dispatch(awardsFunc(res.data));
		});
	};
};
