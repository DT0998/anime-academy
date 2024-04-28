<script lang="ts">
	import signupLogo from '$assets/img/signup/signup.png';
	import * as yup from 'yup';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { authUser, login } from '$store/auth';
	import { transformYupErrorsIntoObject } from '$utils/yup';
	
	let submitted = false;
	interface Fields {
		email?: string;
		password?: string;
	}
	// schema form validation
	const loginSchema = yup.object().shape({
		email: yup.string().required('Email is required').email('Invalid email address'),
		password: yup
			.string()
			.required('Password is required')
			.min(8, 'Password must be at least 8 characters')
			.max(50, 'Password must be at most 50 characters')
	});

	let isValid;
	// value form
	let valuesField = {
		email: '',
		password: ''
	};
	let errors: Fields = {};

	const handleLogin = async () => {
		try {
			submitted = true;
			isValid = await loginSchema.validate(valuesField, { abortEarly: false });
			if (isValid) {
				await login(valuesField.email, valuesField.password);
			}
			errors = {};
		} catch (error: any) {
			errors = transformYupErrorsIntoObject(error);
		} finally {
			submitted = false;
		}
	};

	// protected route
	onMount(() => {
		if ($authUser) {
			goto('/');
		}
	});
</script>

<div class="form-container flex justify-center items-center flex-1">
	<form class="md:w-2/5 w-full h-full md:h-auto" on:submit|preventDefault={handleLogin}>
		<div class="bg-white w-full flex flex-col rounded-lg">
			<h1 class="text-center py-[25px] font-bold">Log In to Anime Art Academy</h1>
			<div class="px-[15px] flex flex-col">
				<label for="email">Email Address</label>
				<input
					type="text"
					name="email"
					class="px-[10px] py-[10px] input-field"
					bind:value={valuesField.email}
				/>
				{#if errors.email}
					<p class="text-red-600 py-[10px]">{errors.email}</p>
				{/if}
			</div>
			<div class="px-[15px] flex flex-col">
				<label for="password">Password</label>
				<input
					type="password"
					name="password"
					class="px-[10px] py-[10px] input-field"
					autocomplete="off"
					bind:value={valuesField.password}
				/>
				{#if errors.password}
					<p class="text-red-600 py-[10px]">{errors.password}</p>
				{/if}
			</div>
			<div class="text-white flex justify-center py-[15px]">
				<button type="submit" class="btn text-center px-[40px] py-[5px] rounded-3xl">Log In</button>
			</div>
			<span class="mb-[15px] text-center"><a href="/">Forgot Password?</a></span>
			<a href="/sign-up">
				<div
					class="form-footer text-gray-600 rounded-b-2xl w-full py-[10px] flex flex-row justify-center items-center border-t cursor-pointer"
				>
					<img src={signupLogo} alt="create" />
					<p class="py-[10px]">Create an Account</p>
				</div>
			</a>
		</div>
	</form>
</div>

<style>
	.form-container {
		background-color: #f5f5f8;
	}
	.form-footer:hover {
		background-color: #20bdaf;
		color: #f5f5f8;
	}
	.btn {
		background-color: #ff3777;
	}
	.input-field {
		border: 1px solid #ccc;
		transition: border-color 0.2s;
	}
	.input-field:focus {
		outline: 0;
		border: 1px solid #cbcbd0;
		box-shadow: 0px 1px 5px #00c2ff;
	}
	@media (max-width: 426px) {
		.form-container {
			background-color: white;
		}
	}
</style>
