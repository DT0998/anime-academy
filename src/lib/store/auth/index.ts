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
		await signInWithEmailAndPassword(firebaseAuth, email, password)
			.then(() => {
				goto('/');
				toast.success('Logged in successfully');
			})
			.catch((error) => {
				handleErrorFirebase(error);
			});
	} catch (error) {
		console.error(error);
	}
};

const register = async (email: string, password: string) => {
	try {
		await createUserWithEmailAndPassword(firebaseAuth, email, password)
			.then(() => {
				goto('/login');
				toast.success('Account created successfully');
			})
			.catch((error) => {
				handleErrorFirebase(error);
			});
	} catch (error) {
		console.error(error);
	}
};

const logout = async () => {
	await signOut(firebaseAuth).then(() => {
		goto('/');
		authUser.set(null);
	});
};

const handleErrorFirebase = (error: { code: string }) => {
	if (error.code === 'auth/invalid-login-credentials') {
		toast.error('Account not exist');
	}
	if (error.code === 'auth/email-already-in-use') {
		toast.error('Email already in use');
	}
};

export { authUser, login, register, logout, onChangeUserFirebase };
