import {
	getRequest,
	putRequest,
	deleteRequest,
	postRequest,
} from "../utils/axios.utils";
import { getHeaders, getAuthHeader } from "../utils/api.utils";

export const getSingleRawBlog = (id) =>
	getRequest(`api/v2/crm/blogs/${id}`, {});

export const getAllBlogs = () =>
	getRequest(`blogs`, getHeaders(getAuthHeader()));

export const createBlog = (data = {}) =>
	postRequest(`blogs`, data, getHeaders(getAuthHeader()));

export const updateBlogById = (id, data) => {
	return putRequest(`api/v2/crm/blogs/${id}`, data);
};

export const deleteBlogById = (id) => {
	return deleteRequest(`blogs/${id}`, getHeaders(getAuthHeader()));
};

export const imageUploadAPI = () => null;
