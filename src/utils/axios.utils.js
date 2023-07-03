import axios from "axios";

const axiosHelper = axios.create({
	baseURL: `https://www.wednow.in/`,
});

axiosHelper.defaults.headers = {
	"Content-Type": "application/json",
	Accept: "application/json",
};

export default axiosHelper;

export function getRequest(URL, config) {
	return axiosHelper.get(`/${URL}`, config);
}

export function postRequest(URL, payload, config) {
	return axiosHelper.post(`/${URL}`, payload, config);
}

export function putRequest(URL, payload, config) {
	return axiosHelper.put(`/${URL}`, payload, config);
}

export function deleteRequest(URL, config) {
	return axiosHelper.delete(`/${URL}`, config);
}
