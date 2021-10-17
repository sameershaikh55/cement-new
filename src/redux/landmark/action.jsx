import { LANDMARK } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const landmarkFunc = (data) => {
	return {
		type: LANDMARK,
		payload: data,
	};
};

export const landmarkApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/landmark-projects?lang=en").then((res) => {
			dispatch(landmarkFunc(res.data));
		});
	};
};
