<script lang="ts">
	import { onMount } from 'svelte';
	import ProgressBar from '$components/ProgressBar/ProgressBar.svelte';
	import SideBar from '$components/SideBar/SideBar.svelte';
	import { onChangeUserFirebase } from '$store/auth/store';
	import '../../../app.css';
	import { Toaster } from 'svelte-french-toast';
	import {
		EllipseOutline,
		CheckmarkCircle,
		ChevronForwardOutline,
		ChevronBackOutline
	} from 'svelte-ionicons';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { listCourses } from '$utils/data/dataCourses';

	// check and set auth user
	onMount(() => {
		onChangeUserFirebase();
	});

	let id: string;
	id = $page.params.idCourse;
	let currentLectureIndex = 0;
	const course = listCourses.find((course) => course.id === parseInt(id));
	const courseDetails = course?.detail;
	const listLectures = courseDetails?.listLectures;
	const lectures = listLectures?.flatMap((section: any) => section.lectures);

	const navigateToLecture = (lectureId: number) => {
		goto(`/online-courses/${id}/lectures/${lectureId}`);
	};

	// navigate to previous lecture
	const navigateToPreviousLecture = () => {
		if (currentLectureIndex > 0) {
			currentLectureIndex--;
			const previousLectureId = lectures && lectures[currentLectureIndex]?.id;
			if (previousLectureId) {
				navigateToLecture(previousLectureId);
			}
		}
	};

	// navigate to next lecture
	const navigateToNextLecture = () => {
		if (lectures && currentLectureIndex < lectures.length) {
			currentLectureIndex++;
			const nextLectureId = lectures && lectures[currentLectureIndex]?.id;
			if (nextLectureId) {
				navigateToLecture(nextLectureId);
			}
		}
	};
</script>

<div class="flex flex-col min-h-screen">
	<SideBar>
		<!-- progress -->
		<div slot="progress">
			<ProgressBar
				extraClass="progress-bar--container shadow-sm py-[15px] px-[32px]"
				title="Anime Art Academy Free Taster Course"
				extraClassInner="flex-col-reverse"
			/>
		</div>
		<div
			slot="navigate-prev-or-next"
			class="flex items-center flex-1 md:mr-[16px] justify-end gap-[15px] mr-[10px]"
		>
			<button
				class="text-white flex px-[15px] py-[10px] rounded-md border border-white md:gap-[5px] items-center {currentLectureIndex ===
					0 && 'bg-gray-300 focus:outline-none'}"
				on:click={navigateToPreviousLecture}
			>
				<ChevronBackOutline size="14" />
				<span class="lg:block hidden">Previous Lesson</span>
			</button>
			<button
				class="btn text-white flex px-[15px] py-[10px] rounded-md md:gap-[5px] items-center"
				on:click={navigateToNextLecture}
			>
				<span class="lg:block hidden">Complete and Continue</span>
				<ChevronForwardOutline size="14" />
			</button>
		</div>
		<!-- list lecture -->
		<div slot="listLecture">
			<div class="flex justify-center flex-col w-full">
				{#each courseDetails?.listLectures || [] as list}<!-- title list lecture -->
					<!-- title list lecture -->
					<div class="font-bold py-[15px] px-[10px]">{list?.title}</div>
					<div class="flex flex-col">
						<!-- list course -->
						{#each list?.lectures as lecture}
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div
								class="flex flex-row items-center px-[11px] py-[25px] course-item cursor-pointer justify-between w-full border border-gray-100"
								on:click={() => navigateToLecture(lecture.id)}
							>
								<div class="flex flex-row items-center gap-[10px] flex-wrap">
									<!-- <CheckmarkCircle class="text-pink-700" size="14" /> -->
									<EllipseOutline class="text-pink-700" size="14" />
									<span class="text-xs">{lecture?.title}(5:25)</span>
								</div>
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
		<!-- content lecture-->
		<div slot="content-lecture">
			<slot />
			<Toaster position="top-right" />
		</div>
	</SideBar>
</div>

<style>
	.btn {
		border: 1px solid #ff3777;
		background-color: #ff3777;
	}
</style>
