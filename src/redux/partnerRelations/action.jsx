import { PARTNER_RELATION, PARTNER_RELATION_DETAIL } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const partnerRelationsFunc = (data) => {
	return {
		type: PARTNER_RELATION,
		payload: data,
	};
};

export const partnerRelationsApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/PartnerRelation").then((res) => {
			dispatch(partnerRelationsFunc(res));
		});
	};
};

// PARTNER RELATION DETAILS
const partnerRelationsDetailFunc = (data) => {
	return {
		type: PARTNER_RELATION_DETAIL,
		payload: data,
	};
};

export const partnerRelationsDetailApi = (pageurl) => {
	let data = {
		page_url: pageurl,
	};
	return (dispatch) => {
		axios.post(API_URL + "/PartnersRelationDetail", data).then((res) => {
			dispatch(partnerRelationsDetailFunc(res));
		});
	};
};
