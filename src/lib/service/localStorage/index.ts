const localStorageService = {
	// get an item from localStorage
	get: (key: string) => {
		if (typeof window !== 'undefined') {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : null;
		}
		return null;
	},
	// set an item in localStorage
	set: (key: string, value: any) => {
		if (typeof window !== 'undefined') {
			localStorage.setItem(key, JSON.stringify(value));
		}
	},
	// remove an item from localStorage
	remove: (key: string) => {
		if (typeof window !== 'undefined') {
			localStorage.removeItem(key);
		}
	}
};

export default localStorageService;