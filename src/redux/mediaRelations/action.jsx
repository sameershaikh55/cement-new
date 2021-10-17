import { MEDIA_RELATION, MEDIA_RELATION_SEARCH } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const mediaRelationFunc = (data) => {
	return {
		type: MEDIA_RELATION,
		payload: data,
	};
};

export const mediaRelationApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/MediaRalations").then((res) => {
			dispatch(mediaRelationFunc(res));
		});
	};
};

// SEARCH FUNCTION
const mediaRelationSearchFunc = (data) => {
	return {
		type: MEDIA_RELATION_SEARCH,
		payload: data,
	};
};

export const mediaRelationSearchApi = (category_id, year_id, month_id) => {
	let data = {
		year_id: year_id,
		month_id: month_id,
		cat_id: [category_id],
	};
	return (dispatch) => {
		axios.post(API_URL + "/MediaRalationSearch", data).then((res) => {
			dispatch(mediaRelationSearchFunc(res));
		});
	};
};
