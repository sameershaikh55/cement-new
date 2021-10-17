import { MANUFACTURING_UNIT } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const manufacturingFunc = (data) => {
	return {
		type: MANUFACTURING_UNIT,
		payload: data,
	};
};

export const manufacturingApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/manufacturing-unit?lang=en").then((res) => {
			dispatch(manufacturingFunc(res.data));
		});
	};
};
