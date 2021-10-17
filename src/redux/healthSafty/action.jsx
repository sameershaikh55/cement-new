import { HEALTH_SAFETY } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const healthSafetyFunc = (data) => {
	return {
		type: HEALTH_SAFETY,
		payload: data,
	};
};

export const healthSafetyApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/HealthAndSafety").then((res) => {
			dispatch(healthSafetyFunc(res));
		});
	};
};
