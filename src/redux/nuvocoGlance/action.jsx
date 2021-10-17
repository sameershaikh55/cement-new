import { NUVOCO_GLANCE } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const nuvocoGlanceFunc = (data) => {
	return {
		type: NUVOCO_GLANCE,
		payload: data,
	};
};

export const nuvocoGlanceApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/nuvoco-at-glance?lang=en").then((res) => {
			dispatch(nuvocoGlanceFunc(res.data));
		});
	};
};
