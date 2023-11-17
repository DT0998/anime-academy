// Function to get an item from localStorage
export function getFromLocalStorage(key: string) {
	if (typeof window !== 'undefined') {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	}
	return null;
}

// Function to set an item in localStorage
export function setInLocalStorage(key: string, value: any) {
	if (typeof window !== 'undefined') {
		localStorage.setItem(key, JSON.stringify(value));
	}
}

// Function to remove an item from localStorage
export function removeFromLocalStorage(key: string) {
	if (typeof window !== 'undefined') {
		localStorage.removeItem(key);
	}
}
