<script lang="ts">
	import signupLogo from '$assets/img/signup/signup.png';
	import * as yup from 'yup';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { authUser, register } from '$store/auth/store';
	
	let submitted = false;
	interface Fields {
		name?: string;
		email?: string;
		password?: string;
		confirmPassword?: string;
	}
	// schema form validation
	const registerSchema = yup.object().shape({
		name: yup
			.string()
			.required('Full name is required')
			.min(3, 'Full name must be at least 3 characters')
			.max(50, 'Full name must be at most 50 characters'),
		email: yup.string().required('Email is required').email('Invalid email address'),
		password: yup
			.string()
			.required('Password is required')
			.min(8, 'Password must be at least 8 characters')
			.max(50, 'Password must be at most 50 characters'),
		confirmPassword: yup
			.string()
			.required('Confirm password is required')
			.oneOf([yup.ref('password'), null], 'Passwords must match')
	});
	let isValid;
	// value form
	let valuesField = {
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	};
	let errors: Fields = {};
	const handleRegister = async () => {
		try {
			submitted = true;
			isValid = await registerSchema.validate(valuesField, { abortEarly: false });
			if (isValid) {
				await register(valuesField.email, valuesField.password);
			}
			errors = {};
		} catch (error: any) {
			errors = error.inner.reduce((acc: any, err: any) => {
				return { ...acc, [err.path]: err.message };
			}, {});
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

<div class="form-container flex justify-center items-center flex-1 md:py-[15px]">
	<form class="md:w-2/5 w-full h-full md:h-auto" on:submit|preventDefault={handleRegister}>
		<div class="bg-white w-full flex flex-col rounded-lg">
			<h1 class="text-center py-[25px] font-bold">Sign Up to Anime Art Academy</h1>
			<div class="px-[15px] flex flex-col">
				<label for="name">Full Name</label>
				<input
					type="text"
					name="name"
					class="px-[10px] py-[10px] input-field"
					bind:value={valuesField.name}
				/>
				{#if errors.name}
					<p class="text-red-600 py-[10px]">{errors.name}</p>
				{/if}
			</div>
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
			<div class="px-[15px] flex flex-col lg:flex-row gap-[20px]">
				<div class="lg:w-2/4 flex flex-col">
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
				<div class="lg:w-2/4 flex flex-col">
					<label for="password">Confirm Password</label>
					<input
						type="password"
						name="confirmPassword"
						class="px-[10px] py-[10px] input-field"
						autocomplete="off"
						bind:value={valuesField.confirmPassword}
					/>
					{#if errors.confirmPassword}
						<p class="text-red-600 py-[10px]">{errors.confirmPassword}</p>
					{/if}
				</div>
			</div>
			<div class="px-[15px] py-[5px]">
				<input type="checkbox" name="promotional" class="px-[5px]" />I agree to receive
				instructional and promotional emails
			</div>
			<div class="px-[15px] py-[15px]">
				<input type="checkbox" name="terms" class="px-[5px]" />I agree to
				<strong>Teachable's</strong>
				<a href="/" style="color: #d00043;">Terms of Use</a>
				& <a href="/" style="color: #d00043;">Privacy Policy</a>
				and
				<span class="font-bold">Anime Art Academy's</span>
				<a href="/" style="color: #d00043;">Terms of Use</a> &
				<a href="/" style="color: #d00043;">Privacy Policy.</a>
			</div>
			<div class="text-white flex justify-center mb-[15px]">
				<button
					type="submit"
					class="btn text-center px-[40px] py-[5px] rounded-3xl"
					disabled={submitted}>Sign up</button
				>
			</div>

			<a href="/login">
				<div
					class="form-footer text-gray-600 rounded-b-2xl w-full py-[10px] flex flex-row justify-center items-center border-t cursor-pointer"
				>
					<img src={signupLogo} alt="login" />
					<span class="py-[10px]"> Log In With a School Account </span>
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
</style>
