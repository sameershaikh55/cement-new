import { MV } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const mvFunc = (data) => {
	return {
		type: MV,
		payload: data,
	};
};

export const mvApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/vision-mission-values?lang=en").then((res) => {
			dispatch(mvFunc(res.data));
		});
	};
};
