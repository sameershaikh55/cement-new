import { SUSTAINABILITY } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const sustainabilityFunc = (data) => {
	return {
		type: SUSTAINABILITY,
		payload: data,
	};
};

export const sustainabilityApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/sustainability?lang=en").then((res) => {
			dispatch(sustainabilityFunc(res.data.page_list));
		});
	};
};
