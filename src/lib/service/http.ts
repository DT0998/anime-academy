import axios from 'axios';
import { DATABASE_URL } from '$env/static/public';

const baseURL = DATABASE_URL;
const axiosInstance = axios.create({
	baseURL
});

// interceptors
axiosInstance.interceptors.response.use(
	(response) => response.data,
	(error) => {
		return Promise.reject(error);
	}
);

const httpService = {
	get: (url: string, config?: any) => axiosInstance.get(url, config),
	post: (url: string, data: any, config?: any) => axiosInstance.post(url, data, config),
	put: (url: string, data: any, config?: any) => axiosInstance.put(url, data, config),
	delete: (url: string, config?: any) => axiosInstance.delete(url, config)
};

export default httpService;
