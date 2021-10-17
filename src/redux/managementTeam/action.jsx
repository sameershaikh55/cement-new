import { MANAGEMENT_TEAM } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const managementFunc = (data) => {
	return {
		type: MANAGEMENT_TEAM,
		payload: data,
	};
};

export const managementApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/management-team?lang=en").then((res) => {
			dispatch(managementFunc(res.data));
		});
	};
};
