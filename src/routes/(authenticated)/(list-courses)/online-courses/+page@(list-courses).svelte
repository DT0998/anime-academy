<script lang="ts">
	import imgAuthor from '$assets/img/online-course/our-teacher.png';
	import { SearchOutline } from 'svelte-ionicons';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Card from '$components/Card/Card.svelte';
	import { authUser } from '$store/auth/store';
	import { listCourses } from '$utils/data/dataCourses';

	let isOpenCategory: boolean = false;
	const handleOpenCategory = () => {
		isOpenCategory = !isOpenCategory;
		isOpenAuthor = false;
	};

	let isOpenAuthor: boolean = false;
	const handleOpenAuthor = () => {
		isOpenAuthor = !isOpenAuthor;
		isOpenCategory = false;
	};

	// protected route
	onMount(() => {
		if (!$authUser) {
			goto('/login');
		}
	});

	// search course
	let searchCourse = '';
	$: filteredCourses = listCourses.filter((course) => {
		const titleMain = course.titleMain.toLowerCase();
		const titleSub = course.titleSub.toLowerCase();
		const searchTerm = searchCourse.toLowerCase();
		return titleMain.includes(searchTerm) || titleSub.includes(searchTerm);
	});
	
	const navigateToCourseDetails = (id: number) => {
		goto(`/online-courses/details/${id}`);
	};
</script>

<div class="relative h-full courses-container flex-1">
	<div
		class="flex items-start md:items-center justify-evenly py-[20px] md:flex-row flex-col gap-[10px] md:gap-0 md:px-0 px-[30px]"
	>
		<div class="text-gray-500 flex gap-[10px] md:flex-row flex-col">
			<button
				class="bg-white px-[15px] py-[5px] rounded-3xl flex gap-[5px]"
				on:click={handleOpenCategory}
			>
				<span>Category:</span>
				<div class="flex items-center relative">
					All
					<!-- caret -->
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"
						><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
							fill="gray"
						/></svg
					>
					{#if isOpenCategory}
						<ul
							class="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-xl mt-[4px] z-10 w-[250px] text-start text-black"
						>
							<li class="p-[8px] menu-content">All</li>
							<li class="p-[8px] menu-content">On-off Payment</li>
							<li class="p-[8px] menu-content">Free</li>
						</ul>
					{/if}
				</div>
			</button>
			<button
				class="bg-white px-[15px] py-[5px] rounded-3xl flex gap-[5px]"
				on:click={handleOpenAuthor}
			>
				<span>Author:</span>
				<div class="flex items-center relative">
					All
					<!-- caret -->
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"
						><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
							d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
							fill="gray"
						/></svg
					>
					{#if isOpenAuthor}
						<ul
							class="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-xl mt-[4px] z-10 w-[250px] text-start text-black"
						>
							<li class="p-[8px] menu-content">All</li>
							<li class="p-[8px] menu-content">Anime Art Academy Teachers</li>
							<li class="p-[8px] menu-content">Anime Art Academy Staff</li>
						</ul>
					{/if}
				</div>
			</button>
		</div>

		<div class="flex justify-end">
			<input
				type="text"
				placeholder="Find a course"
				class="border border-gray-200 rounded-l-lg px-[10px]"
				bind:value={searchCourse}
			/>
			<div
				class="button-search bg-white h-[45px] border rounded-r-lg border-gray-200 flex items-center cursor-pointer px-[10px]"
			>
				<SearchOutline class="text-black" size="30" />
			</div>
		</div>
	</div>
	{#if $authUser}
		<h1 class="text-bold text-3xl mb-[20px] px-[30px]">Courses</h1>
		<div class="rounded-t-3xl flex flex-wrap justify-center pb-[20px] gap-[20px]">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-[30px]">
				{#each filteredCourses as course}
					<Card
						titleMain={course.titleMain}
						titleSub={course.titleSub}
						content={course.content}
						img={course.img}
						{imgAuthor}
						price={course.price}
						extraClass="bg-white"
						authorName={course.authorName}
						onClick={() => navigateToCourseDetails(course.id)}
					/>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.courses-container {
		background-color: #fafafa;
	}
	.menu-content:hover {
		text-decoration: underline;
	}
</style>
