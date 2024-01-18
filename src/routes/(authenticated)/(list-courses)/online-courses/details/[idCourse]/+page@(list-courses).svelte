<script lang="ts">
	import { page } from '$app/stores';
	import { TvOutline } from 'svelte-ionicons';
	import { goto } from '$app/navigation';
	import Header from '$components/Header/Header.svelte';
	import { listCourses } from '$utils/data/dataCourses';
	// follow details id
	let id: string;
	id = $page.params.idCourse;
	const course = listCourses.find((course) => course.id === parseInt(id));
	const courseDetails = course?.detail;

	const navigateToCourseEnroll = (id: number | string) => {
		goto(`/online-courses/enrolled/${id}`);
	};
</script>

<main>
	<Header
		title={course?.titleMain}
		titleSub={course?.titleSub}
		background={courseDetails?.background}
		content={course?.content}
		enroll={courseDetails?.enroll}
	/>
	<!-- course description -->
	<div class="flex justify-center py-[20px] px-[20px]">
		<div class="max-w-[960px] flex flex-col lg:flex-row items-start gap-[20px]">
			<div>
				<h1 class="font-bold text-2xl py-[20px]">Course Description</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit iste quae quaerat non
					nam quasi facere, quo esse doloremque eveniet, voluptate laudantium eaque assumenda animi
					ipsam. Atque mollitia eum quidem!
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit iste quae quaerat non
					nam quasi facere, quo esse doloremque eveniet, voluptate laudantium eaque assumenda animi
					ipsam. Atque mollitia eum quidem!
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit iste quae quaerat non
					nam quasi facere, quo esse doloremque eveniet, voluptate laudantium eaque assumenda animi
					ipsam. Atque mollitia eum quidem! Lorem ipsum dolor, sit amet consectetur adipisicing
					elit. Suscipit iste quae quaerat non nam quasi facere, quo esse doloremque eveniet,
					voluptate laudantium eaque assumenda animi ipsam. Atque mollitia eum quidem! Lorem ipsum
					dolor, sit amet consectetur adipisicing elit. Suscipit iste quae quaerat non nam quasi
					facere, quo esse doloremque eveniet, voluptate laudantium eaque assumenda animi ipsam.
					Atque mollitia eum quidem! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Suscipit iste quae quaerat non nam quasi facere, quo esse doloremque eveniet, voluptate
					laudantium eaque assumenda animi ipsam. Atque mollitia eum quidem! Lorem ipsum dolor, sit
					amet consectetur adipisicing elit. Suscipit iste quae quaerat non nam quasi facere, quo
					esse doloremque eveniet, voluptate laudantium eaque assumenda animi ipsam. Atque mollitia
					eum quidem!
				</p>
			</div>
			<img src={courseDetails?.img_description} alt="course description" />
		</div>
	</div>
	<!-- get started now -->
	<div class="enroll_container flex justify-center py-[20px] px-[20px]">
		<div class="flex justify-center flex-col max-w-[960px] gap-[20px]">
			<h1 class="font-bold text-center text-2xl">Enroll and learn {course?.titleMain} today!</h1>
			<div class="flex">
				<div class="flex items-center h-5">
					<input
						id="helper-radio"
						aria-describedby="helper-radio-text"
						type="radio"
						value=""
						class="w-4 h-4 radio-btn"
						checked
					/>
				</div>
				<div class="ml-2 text-sm">
					<label for="helper-radio" class="font-bold text-xl"
						>{course?.price ? `$${course?.price}` : 'Free'}</label
					>
					<p id="helper-radio-text" class="text-md font-bold">
						{course?.price ? `$${course?.price}` : 'Free'} - {course?.titleMain}
						{course?.titleSub}
					</p>
				</div>
			</div>
			<div class="text-white text-xl text-center">
				<div class=" my-[10px]">
					<button
						class="btn px-[40px] py-[10px] rounded-full"
						on:click={() => navigateToCourseEnroll(id)}>Enroll now</button
					>
				</div>
			</div>
		</div>
	</div>
	<!-- course curriculum -->
	<div class="flex justify-center py-[20px] px-[20px]">
		<div class="max-w-[960px] flex justify-center flex-col gap-[20px]">
			<h1 class="font-bold text-center text-2xl">Course Curriculum</h1>
			{#each courseDetails?.listLectures ?? [] as list}

				<div class="flex flex-col">
					<div class="course_container px-[10px]">
						<h1 class="py-[5px] font-bold">{list?.title}</h1>
					</div>
					<!-- list course -->
					{#each list?.lectures as lecture}
						<div
							class="flex flex-row gap-[10px] items-center px-[11px] py-[16px] course-item cursor-pointer md:min-w-[710px] justify-between"
						>
							<div class="flex flex-row items-center gap-[10px] flex-wrap">
								<TvOutline class="text-pink-700" size="16" />
								<span>{lecture?.title}(5:25)</span>
							</div>
							<div class="text-white text-sm text-center">
								<p class="btn px-[10px] py-[5px] rounded-sm">Preview</p>
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
	<!-- policy -->
	<div class="policy-container flex justify-center flex-col py-[20px] px-[20px] gap-[20px]">
		<h1 class="text-center text-2xl text-rose-900 underline underline-offset-1">
			Frequently Asked Questions
		</h1>
		<h4 class="text-2xl">Refund Policy</h4>
		<div class="flex gap-[20px] flex-col">
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem placeat dignissimos hic
				rerum, similique delectus obcaecati? Dolorem, autem? Odio asperiores beatae harum ipsum
				autem ad repellendus quaerat alias culpa similique?
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem placeat dignissimos hic
				rerum, similique delectus obcaecati? Dolorem, autem? Odio asperiores beatae harum ipsum
				autem ad repellendus quaerat alias culpa similique?
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem placeat dignissimos hic
				rerum, similique delectus obcaecati? Dolorem, autem? Odio asperiores beatae harum ipsum
				autem ad repellendus quaerat alias culpa similique?
			</p>
		</div>
	</div>
</main>

<style>
	.policy-container,
	.enroll_container {
		background-color: #f5f5f8;
	}
	.btn {
		border: 1px solid #ff3777;
		background-color: #ff3777;
	}
	.radio-btn {
		accent-color: #ff3777;
	}
	.course_container {
		background-color: #efeff5;
	}
	.course-item {
		background-color: #f9fafd;
	}
	.course-item:hover {
		background-color: #e3dfdf;
	}
</style>
