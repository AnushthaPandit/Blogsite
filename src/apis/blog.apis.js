import { getRequest, putRequest } from "../utils/axios.utils";

export const getSingleRawBlog = (id) =>
	getRequest(`api/v2/crm/blogs/${id}`, {});

export const updateBlogById = (id, data) => {
	return putRequest(`api/v2/crm/blogs/${id}`, data);
};

export const imageUploadAPI = () => null;
