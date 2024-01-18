// Function to get an item from localStorage
export function getLocalStorage(key: string) {
	if (typeof window !== 'undefined') {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	}
	return null;
}

// Function to set an item in localStorage
export function setLocalStorage(key: string, value: any) {
	if (typeof window !== 'undefined') {
		localStorage.setItem(key, JSON.stringify(value));
	}
}

// Function to remove an item from localStorage
export function removeLocalStorage(key: string) {
	if (typeof window !== 'undefined') {
		localStorage.removeItem(key);
	}
}
