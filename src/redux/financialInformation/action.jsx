import { FINANCIAL_INFORMATION, FINANCIAL_INFORMATION_SEARCH } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const financialInformationFunc = (data) => {
	return {
		type: FINANCIAL_INFORMATION,
		payload: data,
	};
};

export const financialInformationApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/FinancialInformation").then((res) => {
			dispatch(financialInformationFunc(res));
		});
	};
};

const financialInformationSearchFunc = (data) => {
	return {
		type: FINANCIAL_INFORMATION_SEARCH,
		payload: data,
	};
};

export const financialInformationSearchApi = (category_id, year_id) => {
	let data = {
		category_id: category_id,
		year_id: year_id,
	};
	return (dispatch) => {
		axios.post(API_URL + "/FinancialInformationSearch", data).then((res) => {
			dispatch(financialInformationSearchFunc(res));
		});
	};
};
