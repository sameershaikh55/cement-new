import { BUILDING } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const buildingFunc = (data) => {
	return {
		type: BUILDING,
		payload: data,
	};
};

export const buildingApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/home-building-assistance?lang=en").then((res) => {
			dispatch(buildingFunc(res.data.page_list));
		});
	};
};
