import axios from 'axios';
import { DATABASE_URL } from '$env/static/public';

const baseURL = DATABASE_URL;
const axiosInstance = axios.create({
	baseURL
});

// interceptors request
axiosInstance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		handleError(error);
	}
);

// interceptors response
axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		handleError(error);
	}
);

const handleError = (error: any) => {
	console.error(error);
};

const httpService = {
	get: async <T>(url: string, config?: any): Promise<T | undefined> => {
		const response = await axiosInstance.get<T>(url, config);
		return response.data;
	},

	post: async <T>(url: string, data: any, config?: any): Promise<T | undefined> => {
		const response = await axiosInstance.post<T>(url, data, config);
		return response.data;
	},

	put: async <T>(url: string, data: any, config?: any): Promise<T | undefined> => {
		const response = await axiosInstance.put<T>(url, data, config);
		return response.data;
	},

	delete: async <T>(url: string, config?: any): Promise<T | undefined> => {
		const response = await axiosInstance.delete<T>(url, config);
		return response.data;
	}
};

export default httpService;
