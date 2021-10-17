import { MENU } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const menuFunc = (data) => {
	return {
		type: MENU,
		payload: data,
	};
};

export const menuApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/menu?lang=en").then((res) => {
			dispatch(menuFunc(res.data));
		});
	};
};
