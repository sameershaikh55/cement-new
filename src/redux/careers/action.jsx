import { CAREERS } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const careerFunc = (data) => {
	return {
		type: CAREERS,
		payload: data,
	};
};

export const careerApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/life-at-nuvoco").then((res) => {
			dispatch(careerFunc(res.data));
		});
	};
};
