import { CONTACT } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const contactFunc = (data) => {
	return {
		type: CONTACT,
		payload: data,
	};
};

export const contactApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/Contactus").then((res) => {
			dispatch(contactFunc(res.data));
		});
	};
};
