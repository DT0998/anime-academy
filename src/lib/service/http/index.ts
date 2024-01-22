import axios from 'axios';
import { DATABASE_URL } from '$env/static/public';

const baseURL = DATABASE_URL;
const axiosInstance = axios.create({
	baseURL
});

// interceptors
axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		return Promise.reject(error);
	}
);

const httpService = {
	get: async <T>(url: string, config?: any): Promise<T | undefined> => {
		try {
			const response = await axiosInstance.get<T>(url, config);
			return response.data;
		} catch (error) {
			console.error('HTTP GET Error:', error);
			return undefined;
		}
	},

	post: async <T>(url: string, data: any, config?: any): Promise<T | undefined> => {
		try {
			const response = await axiosInstance.post<T>(url, data, config);
			return response.data;
		} catch (error) {
			console.error('HTTP POST Error:', error);
			return undefined;
		}
	},

	put: async <T>(url: string, data: any, config?: any): Promise<T | undefined> => {
		try {
			const response = await axiosInstance.put<T>(url, data, config);
			return response.data;
		} catch (error) {
			console.error('HTTP PUT Error:', error);
			return undefined;
		}
	},

	delete: async <T>(url: string, config?: any): Promise<T | undefined> => {
		try {
			const response = await axiosInstance.delete<T>(url, config);
			return response.data;
		} catch (error) {
			console.error('HTTP DELETE Error:', error);
			return undefined;
		}
	}
};

export default httpService;
