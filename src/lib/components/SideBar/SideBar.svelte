<script lang="ts">
	import { HomeOutline, SettingsOutline, ReorderThreeOutline } from 'svelte-ionicons';
	import MediaQuery from '$components/MediaQuery/MediaQuery.svelte';

	let isSidebarMobileOpen = false;

	const toggleSidebarMobile = () => {
		isSidebarMobileOpen = !isSidebarMobileOpen;
	};
</script>

<!-- nav -->
<nav
	class="fixed top-0 z-50 w-full border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 sidebar-container"
>
	<div class="flex flex-row h-16">
		<div class="flex items-center md:border-r-[1px] border-gray-200 md:w-[350px]">
			<div class="flex-grow">
				<a href="/">
					<HomeOutline size="20" class="text-white mx-[12px] md:ml-3 h-full" />
				</a>
			</div>
			<div class="border-x md:border-x-0 border-gray-400 h-full">
				<SettingsOutline size="20" class="text-white mx-[12px] md:mx-0 h-full md:mr-3" />
			</div>
			<button on:click={toggleSidebarMobile}>
				<ReorderThreeOutline size="20" class="text-white mx-[12px] md:hidden block" />
			</button>
		</div>
		<slot name="navigate-prev-or-next" />
	</div>
</nav>

<!-- side bar -->
<MediaQuery query="(max-width: 426px)" let:matches>
	{#if matches}
		<aside
			id="logo-sidebar"
			class="fixed top-0 left-0 z-40 md:w-[350px] pt-16 h-screen w-full transition-transform shadow-xl bg-white border-r border-gray-200 {isSidebarMobileOpen
				? 'translate-y-0'
				: '-translate-y-full'} "
			aria-label="Sidebar"
		>
			<div class="h-full pb-4 overflow-y-auto bg-white">
				<slot name="progress" />
				<slot name="title-listLecture" />
				<slot name="listLecture" />
			</div>
		</aside>
	{:else}
		<aside
			id="logo-sidebar"
			class="fixed top-0 left-0 z-40 md:w-[350px] pt-16 h-screen w-full transition-transform shadow-xl bg-white border-r border-gray-200 sm:translate-x-0 -translate-x-full"
			aria-label="Sidebar"
		>
			<div class="h-full pb-4 overflow-y-auto bg-white">
				<slot name="progress" />
				<slot name="title-listLecture" />
				<slot name="listLecture" />
			</div>
		</aside>
	{/if}
</MediaQuery>

<!-- content -->
<div class="md:p-4 p-1 sm:ml-96 md:ml-[21rem]">
	<div class="md:p-4 p-1 mt-14">
		<slot name="content-lecture" />
	</div>
</div>

<style>
	.sidebar-container {
		background-color: #333;
	}
</style>
