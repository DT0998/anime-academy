<script lang="ts">
	import { goto } from '$app/navigation';
	import { authUser } from '$store/auth';
	export let background: string | undefined;
	export let title: string | undefined;
	export let titleSub: string | undefined = undefined;
	export let content: string | undefined = undefined;
	export let enroll: string | undefined = undefined;
	
	const navigateToSignup = () => {
		goto(`/sign-up`);
	};
</script>

<div class="homepage-container w-full h-full relative" style="background-image:url('{background}')">
	<div class="transbox">
		<div class="md:py-[100px] w-full h-full flex flex-col items-center">
			<div class="text-white h-full w-full mb-[15px]">
				<h1 class="text-center pb-[30px] md:text-5xl text-3xl font-bold">{title}</h1>
				{#if titleSub}
					<h1 class="text-center pb-[30px] md:text-5xl text-3xl font-bold">{titleSub}</h1>
				{/if}
				{#if content}
					<div class="text-xl text-center">
						<div class="py-[20px]">
							<span>{content}</span>
						</div>
					</div>
				{:else}
					<slot />
				{/if}
			</div>
			{#if enroll}
				<div class="pt-[25px] text-white text-xl text-center">
					<div class=" my-[10px]">
						<button class="btn px-[40px] py-[10px] rounded-full"
							>Enroll in Course for {enroll}</button
						>
					</div>
				</div>
			{/if}
			<div class="pt-[25px] text-white text-xl text-center">
				{#if !$authUser}
					<span class="mb-[15px]">Sign up and check out our free preview lectures today</span>
					<div class=" my-[10px]">
						<button class="btn px-[40px] py-[10px] rounded-full" on:click={() => navigateToSignup()}
							>Free Sign Up</button
						>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.homepage-container {
		background-position: center;
		background-size: cover;
	}
	.transbox {
		background-color: rgba(0, 0, 0, 0.32);
		-webkit-backdrop-filter: brightness(5px);
		backdrop-filter: brightness(5px);
	}
	.btn {
		border: 1px solid #ff3777;
		background-color: #ff3777;
	}
</style>
