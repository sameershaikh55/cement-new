import { INNOVATION_CENTRE } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const innovationCentreFunc = (data) => {
	return {
		type: INNOVATION_CENTRE,
		payload: data,
	};
};

export const innovationCentreApi = () => {
	return (dispatch) => {
		axios.post(API_URL + "/innovation-center?lang=en").then((res) => {
			dispatch(innovationCentreFunc(res.data));
		});
	};
};
