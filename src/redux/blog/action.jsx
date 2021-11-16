import { BLOG, BLOG_SINGLE } from "./type";
import { API_URL } from "../config";
import axios from "axios";

const blogFunc = (data) => {
	return {
		type: BLOG,
		payload: data,
	};
};

export const blogApi = () => {
	return (dispatch) => {
		axios.get(API_URL + "/blog?lang=en").then((res) => {
			dispatch(blogFunc(res.data));
		});
	};
};

const blogSingleFunc = (data) => {
	return {
		type: BLOG_SINGLE,
		payload: data,
	};
};

export const blogSingleApi = (url) => {
	let data = {
		page_url: url,
		lang: "en",
	};

	return (dispatch) => {
		axios.post(API_URL + "/BlogDetails?", data).then((res) => {
			dispatch(blogSingleFunc(res.data));
		});
	};
};
