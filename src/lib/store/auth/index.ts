import { writable } from 'svelte/store';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import toast from 'svelte-french-toast';
import { goto } from '$app/navigation';
import { firebaseAuth } from '$firebase/index';
import localStorageService from '$service/localStorage';

interface AuthUser {
	uid: string | null;
	email: string | null;
}

const authUser = writable<AuthUser | null>(localStorageService.get('authUser'));

const onChangeUserFirebase = () => {
	firebaseAuth.onAuthStateChanged((user) => {
		if (user) {
			const { uid, email } = user;
			authUser.set({ uid, email });
			localStorageService.set('authUser', user);
		} else {
			authUser.set(null);
			localStorageService.remove('authUser');
		}
	});
};

const login = async (email: string, password: string) => {
	try {
		await signInWithEmailAndPassword(firebaseAuth, email, password);
		goto('/');
		toast.success('Logged in successfully');
	} catch (error: any) {
		if (error.code === 'auth/invalid-login-credentials') {
			toast.error('Account not exist');
		}
	}
};

const register = async (email: string, password: string) => {
	try {
		await createUserWithEmailAndPassword(firebaseAuth, email, password);
		toast.success('Account created successfully');
		goto('/login');
	} catch (error: any) {
		if (error.code === 'auth/email-already-in-use') {
			toast.error('Email already in use');
		}
	}
};
const logout = async () => {
	try {
		await signOut(firebaseAuth);
		goto('/');
		authUser.set(null);
	} catch (error) {
		console.error(error);
	}
};
export { authUser, login, register, logout, onChangeUserFirebase };
