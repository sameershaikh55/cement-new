import { HOME } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const homeFunc = (data) => {
	return {
		type: HOME,
		payload: data,
	};
};

export const homeApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/home?lang=en").then((res) => {
			dispatch(homeFunc(res.data));
		});
	};
};
