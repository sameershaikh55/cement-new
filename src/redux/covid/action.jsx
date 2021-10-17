import { COVID } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const covidFunc = (data) => {
	return {
		type: COVID,
		payload: data,
	};
};

export const covidApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/covid-initiative?lang=en").then((res) => {
			dispatch(covidFunc(res.data));
		});
	};
};
