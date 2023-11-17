<script lang="ts">
	import { page } from '$app/stores';
	import { CheckmarkCircle, EllipseOutline } from 'svelte-ionicons';
	import author from '$assets/img/online-course/enrolled/author.webp';
	import { listCourses } from '$utils/dataCourses';
	import { goto } from '$app/navigation';
	import ProgressBar from '$components/ProgressBar/ProgressBar.svelte';
	// follow list course id
	let id: string;
	id = $page.params.idCourse;
	const course = listCourses.find((course: any) => course.id === parseInt(id));
	const courseDetails = course?.detail;
	
	const navigateToLecture = (lectureId: number) => {
		goto(`/online-courses/${id}/lectures/${lectureId}`);
	};
</script>

<div class="h-full flex flex-col enrolled-container items-center flex-1">
	<div class="max-w-[960px] px-[10px]">
		<h1 class="font-bold text-2xl py-[20px]">{course?.titleMain} {course?.titleSub}</h1>
		<div
			class="bg-white md:py-[40px] md:px-[32px] shadow-md flex justify-between flex-col md:flex-row gap-[20px]"
		>
			<img src={course?.img} alt="logo" class="md:w-3/6" />
			<div class="enroll-item flex py-[20px] px-[20px] items-center flex-col justify-center">
				{#if courseDetails?.listLectures && courseDetails?.listLectures[0]?.lectures[0]}
					<!-- start active lesson -->
					<p class="text-center">
						{courseDetails?.listLectures[0]?.title}: 0 / {courseDetails.total}
					</p>
					<h2 class="text-xl font-bold text-center">
						{courseDetails.listLectures[0].lectures[0].title}
					</h2>
					<button
						class="btn ml-4 text-white my-[15px] px-[15px] py-[5px] rounded-md font-bold"
						on:click={() => navigateToLecture(courseDetails.listLectures[0].lectures[0].id)}
					>
						Start Lesson</button
					>
				{/if}
			</div>
		</div>
		<!-- list course -->
		<div class="my-[10px] flex flex-col md:flex-row justify-between md:gap-[10px] gap-[10px]">
			<div class="flex flex-col w-full h-fit gap-[10px]">
				{#each courseDetails?.listLectures || [] as list}

					<div class="bg-white py-[20px] px-[20px] shadow-md flex justify-between w-full h-fit">
						<div class="flex items-start flex-col justify-start w-full">
							<div class="flex justify-center flex-col w-full mt-[20px]">
								<h1 class="font-bold">{list?.title}</h1>
								<p>0 / {courseDetails?.total} complete</p>
								<div class="flex flex-col gap-[5px]">
									<!-- list course -->
									{#each list?.lectures as lecture}
										<!-- svelte-ignore a11y-no-static-element-interactions -->
										<!-- svelte-ignore a11y-click-events-have-key-events -->
										<div
											class="flex flex-row gap-[10px] items-center px-[11px] py-[16px] course-item cursor-pointer justify-between w-full rounded-md"
											on:click={() => navigateToLecture(lecture.id)}
										>
											<div class="flex flex-row items-center gap-[10px] flex-wrap">
												<!-- <CheckmarkCircle class="text-pink-700" size="14" /> -->
												<EllipseOutline class="text-pink-700" size="14" />
												<span class="text-xs">{lecture?.title}(5:25)</span>
											</div>
											<div class="text-white text-sm text-center">
												<p class="btn px-[10px] py-[5px] rounded-md">Start</p>
											</div>
										</div>
									{/each}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<div class="flex gap-[10px] flex-col md:w-3/5">
				<!-- progress bar -->
				<ProgressBar
					extraClass="bg-white shadow-md py-[40px] px-[32px]"
					extraClassInner="flex-col"
				/>
				<!-- author -->
				<div class="bg-white py-[40px] px-[32px] shadow-md flex justify-between">
					<div class="flex flex-col justify-center gap-[15px]">
						<div class="flex flex-col md:flex-row items-center gap-[10px]">
							<img src={author} alt="author" class="rounded-full w-1/4" />
							<h2 class="font-bold text-center">Anime Art Academy Teachers</h2>
						</div>
						<p class="underline text-xs text-blue-600 text-start">
							Read more about our teachers here!
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.enrolled-container {
		background-color: #f9fafd;
	}
	.enroll-item {
		background-color: #f9fafd;
	}
	.btn {
		border: 1px solid #ff3777;
		background-color: #ff3777;
	}
	.course-item {
		background-color: #f9fafd;
		border-left: 8px solid transparent;
	}
</style>
