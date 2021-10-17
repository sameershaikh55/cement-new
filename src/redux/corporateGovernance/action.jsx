import { CORPORATE_GOVERNANCE, CORPORATE_GOVERNANCE_SEARCH } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const corporateGovernanceFunc = (data) => {
	return {
		type: CORPORATE_GOVERNANCE,
		payload: data,
	};
};

export const corporateGovernanceApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/CorporateGovernance").then((res) => {
			dispatch(corporateGovernanceFunc(res));
		});
	};
};

const corporateGovernanceSearchFunc = (data) => {
	return {
		type: CORPORATE_GOVERNANCE_SEARCH,
		payload: data,
	};
};

export const corporateGovernanceSearchApi = (
	category_id,
	year_id,
	meeting_id,
	policies_id
) => {
	let data = {
		category_id: category_id,
		year_id: year_id,
		meeting_id: meeting_id,
		policies_id: policies_id,
	};
	return (dispatch) => {
		axios.post(API_URL + "/CorporateGovernanceSearch", data).then((res) => {
			dispatch(corporateGovernanceSearchFunc(res));
		});
	};
};
