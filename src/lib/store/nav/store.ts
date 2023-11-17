import { writable } from 'svelte/store';

const isOpenSocial = writable<boolean>(false);
const isOpenMobileMenu = writable<boolean>(false);
const isOpenProfileMenu = writable<boolean>(false);

// open social menu
const toggleOpenSocial = () => {
	isOpenSocial.update((value) => !value);
	isOpenProfileMenu.set(false);
};

// open mobile menu
const toggleMobileMenu = () => {
	isOpenMobileMenu.update((value) => !value);
};

// open profile menu
const toggleProfileMenu = () => {
	isOpenProfileMenu.update((value) => !value);
	isOpenSocial.set(false);
};

export {
	isOpenSocial,
	isOpenMobileMenu,
	isOpenProfileMenu,
	toggleOpenSocial,
	toggleMobileMenu,
	toggleProfileMenu
};
