import { BOARD_DIRECTORS } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const boardDirectorsFunc = (data) => {
	return {
		type: BOARD_DIRECTORS,
		payload: data,
	};
};

export const boardDirectorsApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/board-of-directors?lang=en").then((res) => {
			dispatch(boardDirectorsFunc(res));
		});
	};
};
