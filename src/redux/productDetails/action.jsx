import { PRODUCT_DETAILS, PRODUCT_DETAILS_PAGE } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const productDetailsFunc = (data) => {
	return {
		type: PRODUCT_DETAILS,
		payload: data,
	};
};

export const productDetailsApi = (page_url) => {
	let data = {
		page_url: page_url,
	};
	return (dispatch) => {
		axios.post(API_URL + "/ProductAndSolutionCategory", data).then((res) => {
			dispatch(productDetailsFunc(res));
		});
	};
};

const productDetailsPageFunc = (data) => {
	return {
		type: PRODUCT_DETAILS_PAGE,
		payload: data,
	};
};

export const productDetailsPageApi = (page_url) => {
	let data = {
		page_url: page_url,
	};
	return (dispatch) => {
		axios.post(API_URL + "/ProductDetails", data).then((res) => {
			dispatch(productDetailsPageFunc(res));
		});
	};
};
