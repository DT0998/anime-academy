<script>
	import { onMount } from 'svelte';
	import '../../../app.css';
	import { Toaster } from 'svelte-french-toast';
	import { ReorderThreeOutline } from 'svelte-ionicons';
	import avatar from '$assets/img/profile/profile.png';
	import {
		isOpenMobileMenu,
		isOpenProfileMenu,
		isOpenSocial,
		toggleMobileMenu,
		toggleOpenSocial,
		toggleProfileMenu
	} from '$store/nav/store';
	import NavBar from '$components/NavBar/NavBar.svelte';
	import Footer from '$components/Footer/Footer.svelte';
	import { authUser, logout, onChangeUserFirebase } from '$store/auth/store';

	// check and set auth user
	onMount(() => {
		onChangeUserFirebase();
	});
	// logout
	const handleLogout = async () => {
		await logout();
	};
</script>

<div class="flex flex-col min-h-screen justify-between">
	<NavBar extraClass="max-[768px]:justify-between" extraClassInner="justify-between">
		<!-- slot desk menu -->
		<div slot="desk-menu">
			<div
				class="menu-nav-desk w-full h-full flex justify-end items-center z-50 max-[768px]:hidden"
			>
				<ul class="menu-desk flex items-center">
					<li>
						<a href="/about" class="menu-content ml-4 h-full text-white">About us</a>
					</li>
					{#if $authUser}
						<li>
							<a href="/online-courses" class="menu-content ml-4 h-full text-white"
								>Online courses</a
							>
						</li>
					{/if}
					<li>
						<a href="/user-review" class="menu-content ml-4 h-full text-white">Testimonials</a>
					</li>
					<li>
						<a href="/faq" class="menu-content ml-4 h-full text-white">FAQs</a>
					</li>
					<li>
						<a href="/blog" class="menu-content ml-4 h-full text-white">Blog</a>
					</li>
					<li class="relative">
						<button on:click={toggleOpenSocial} class="ml-4">
							<p class="h-full text-white relative flex items-center gap-[5px]">
								More
								<!-- caret -->
								<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"
									><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
										d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
										fill="white"
									/></svg
								>
							</p>
						</button>
						{#if $isOpenSocial}
							<ul
								class="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl mt-[4px] z-5 w-[200px]"
							>
								<li class="p-[8px] menu-content">
									<a href="https://twitter.com/AnimeArtAcademy">Twitter</a>
								</li>
								<li class="p-[8px] menu-content">
									<a href="https://www.instagram.com/anime_art_academy/">Instagram</a>
								</li>
								<li class="p-[8px] menu-content">
									<a href="https://www.deviantart.com/anime-artacademy">DeviantArt</a>
								</li>
								<li class="p-[8px] menu-content"><a href="/">Affiliate</a></li>
							</ul>
						{/if}
					</li>
					{#if $authUser}
						<li class="relative flex">
							<button on:click={toggleProfileMenu} class="ml-4">
								<img src={avatar} alt="avatar" class="h-[30px] w-[30px] rounded-full" />
							</button>
							{#if $isOpenProfileMenu}
								<ul
									class="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl mt-[4px] z-5 w-[200px]"
								>
									<li class="p-[8px] menu-content">
										<a href="/">Edit Profile</a>
									</li>
									<button on:click={handleLogout}>
										<li class="p-[8px] menu-content">
											<p>Log Out</p>
										</li>
									</button>
								</ul>
							{/if}
						</li>
					{:else}
						<li>
							<a href="/login" class="menu-content ml-4 h-full text-white">Login</a>
						</li>
						<li>
							<a href="/sign-up" class="btn ml-4 text-white px-[15px] py-[5px] rounded-xl"
								>Free Sign Up</a
							>
						</li>
					{/if}
				</ul>
			</div>
		</div>
		<div slot="mobile-menu">
			<ReorderThreeOutline
				class="cursor-pointer text-white"
				size="30"
				on:click={toggleMobileMenu}
			/>
			{#if $isOpenMobileMenu}
				<ul
					class="menu-mobile-content absolute right-0 top-full bg-white rounded-lg shadow-xl mt-[0px] z-50 w-[200px] max-h-[300px]"
				>
					<li class="p-[8px] menu-content">
						<a href="/about">About</a>
					</li>
					{#if $authUser}
						<li class="p-[8px] menu-content">
							<a href="/online-courses">Online Course</a>
						</li>
					{/if}
					<li class="p-[8px] menu-content">
						<a href="/user-review">Testimonials</a>
					</li>
					<li class="p-[8px] menu-content">
						<a href="/faq">FAQs</a>
					</li>
					<li class="p-[8px] menu-content">
						<a href="/blog">Blog</a>
					</li>
					<li class="p-[8px] menu-content">
						<button on:click={toggleOpenSocial}>
							<p class="flex flex-row gap-[5px]">
								More
								<!-- caret -->
								<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"
									><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
										d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
										fill="black"
									/></svg
								>
							</p>
						</button>
					</li>
					{#if $isOpenSocial}
						<li class="p-[8px] menu-content">
							<a href="https://twitter.com/AnimeArtAcademy">Twitter</a>
						</li>
						<li class="p-[8px] menu-content">
							<a href="https://www.instagram.com/anime_art_academy/">Instagram</a>
						</li>
						<li class="p-[8px] menu-content">
							<a href="https://www.deviantart.com/anime-artacademy">DeviantArt</a>
						</li>
						<li class="p-[8px] menu-content"><a href="/">Affiliate</a></li>
					{/if}
					{#if $authUser}
						<li class="p-[8px] menu-content">
							<button on:click={toggleProfileMenu}>
								<div class="flex flex-row gap-[5px]">
									<img src={avatar} alt="avatar" class="h-[30px] w-[30px] rounded-full" />
									<p>{$authUser.email}</p>
									<!-- caret -->
									<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"
										><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
											d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
											fill="black"
										/></svg
									>
								</div>
							</button>
						</li>
						{#if $isOpenProfileMenu}
							<li class="p-[8px] menu-content">
								<a href="/">Edit Profile</a>
							</li>
							<button on:click={handleLogout}>
								<li class="p-[8px] menu-content">
									<p>Log out</p>
								</li>
							</button>
						{/if}
					{:else}
						<li class="p-[8px] menu-content">
							<a href="/login">Login</a>
						</li>
					{/if}
				</ul>
			{/if}
		</div>
	</NavBar>
	<Toaster position="top-right" />
	<slot />
	<Footer extraClass="justify-between">
		<div class="h-full text-center flex flex-col">
			<a href="/" class="footer_content">Terms of Use</a>
			<a href="/" class="footer_content">Privacy Policy</a>
		</div>
		<div class="h-full text-center flex flex-col">
			<a href="/" class="footer_content">About Us</a>
			<a href="/" class="footer_content">Affiliate</a>
		</div>
	</Footer>
</div>

<style>
	.menu-mobile-content {
		overflow-y: auto;
	}
	.menu-content:hover {
		cursor: pointer;
		text-decoration: underline;
	}
	.btn {
		border: 1px solid #ff3777;
		background-color: #ff3777;
	}
	.footer_content:hover {
		color: #fff;
	}
</style>
