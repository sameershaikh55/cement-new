import { ENVIRONMENT, ENVIRONMENT_SEARCH } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const environmentFunc = (data) => {
	return {
		type: ENVIRONMENT,
		payload: data,
	};
};

export const environmentApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/Enviornment").then((res) => {
			dispatch(environmentFunc(res));
		});
	};
};

const environmentSearchFunc = (data) => {
	return {
		type: ENVIRONMENT_SEARCH,
		payload: data,
	};
};

export const environmentSearchApi = (
	selectedYear,
	selectedMonth,
	selectedPlant
) => {
	let data = {
		year: selectedYear,
		month: selectedMonth,
		plant: selectedPlant,
	};
	return (dispatch) => {
		axios.post(API_URL + "/EnviornmentSearch", data).then((res) => {
			dispatch(environmentSearchFunc(res));
		});
	};
};
