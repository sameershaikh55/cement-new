import { CSR } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const csrFunc = (data) => {
	return {
		type: CSR,
		payload: data,
	};
};

export const csrApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/CorporateSocialResponsibility").then((res) => {
			dispatch(csrFunc(res));
		});
	};
};
