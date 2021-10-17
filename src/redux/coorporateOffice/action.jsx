import { CORPORATE_OFFICE } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const corporateOfficeFunc = (data) => {
	return {
		type: CORPORATE_OFFICE,
		payload: data,
	};
};

export const corporateOfficeApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/corporate-offices?lang=en").then((res) => {
			dispatch(corporateOfficeFunc(res.data));
		});
	};
};
