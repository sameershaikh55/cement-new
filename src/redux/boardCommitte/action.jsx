import { BOARD_COMMITTEE } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const boardCommitteeFunc = (data) => {
	return {
		type: BOARD_COMMITTEE,
		payload: data,
	};
};

export const boardCommitteeApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/board-of-committe?lang=en").then((res) => {
			dispatch(boardCommitteeFunc(res));
		});
	};
};
