<script lang="ts">
	import { page } from '$app/stores';
	import { onDestroy, onMount } from 'svelte';
	import onePayOff from '$assets/img/online-course/enrolled/one-pay.png';
	import avatar from '$assets/img/profile/profile.png';
	import { ChevronForwardOutline } from 'svelte-ionicons';
	import { authUser } from '$store/auth';
	import { push, ref } from 'firebase/database';
	import * as yup from 'yup';
	import toast from 'svelte-french-toast';
	import { getListComments, listComments } from '$store/comments';
	import { firebaseDatabase } from '$firebase/index';
	import { listCourses } from '$utils/data/dataCourses';

	interface Fields {
		created_at?: Date;
		id?: string | null;
		email?: string | null;
		body?: string;
	}

	// schema form validation
	const commentSchema = yup.object().shape({
		body: yup.string().required('Comment is required')
	});
	let valuesField = {
		body: ''
	};

	let errors: Fields = {};
	// follow list course id
	let id: string;
	let idLecture: string;
	let course: any;
	let courseDetails: any;
	let listLectures: any;
	let lecture: any;
	let submitted = false;
	let isValid;

	// unsubscribe page when change param id
	const unsubscribe = page.subscribe(($page) => {
		id = $page.params.idCourse;
		idLecture = $page.params.idLecture;
	});

	// reactive statement change route
	$: {
		course = listCourses.find((course) => course.id === parseInt(id));
		courseDetails = course?.detail;
		listLectures = courseDetails?.listLectures;
		lecture = listLectures
			?.flatMap((section: any) => section.lectures)
			.find((lecture: any) => lecture.id === parseInt(idLecture));
		getListComments(idLecture);
	}

	$: comments = $listComments.comments || [];

	onDestroy(() => {
		unsubscribe();
	});

	onMount(async () => {
		await getListComments(idLecture);
	});

	// Detect and convert URLs to clickable links
	const handleUrlLinkBody = (body: string | null | undefined) => {
		return body?.replace(
			/(https?:\/\/[^\s]+)/g,
			'<a href="$1" target="_blank" class="text-rose-500">$1</a>'
		);
	};

	const handlePostComment = async () => {
		try {
			submitted = true;
			const payload = {
				created_at: new Date().toLocaleString(),
				id: $authUser?.uid,
				email: $authUser?.email,
				body: valuesField.body
			};
			isValid = await commentSchema.validate(valuesField, { abortEarly: false });
			const commentRef = ref(firebaseDatabase, `comments/${idLecture}`);
			if (isValid) {
				push(commentRef, payload);
				valuesField.body = '';
				toast.success('Comment successfully posted');
				// delay because update data on firebase server too slow
				setTimeout(async () => {
					await getListComments(idLecture);
				}, 1000);
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

	// format date
	const formatDateToLocalDate = (timestamp: Date) => {
		const date = new Date(timestamp);
		return date.toLocaleDateString();
	};

	// Sort comments in descending order based on created_at timestamp
	$: sortedComments = [...comments].sort((a, b) => {
		const dateA = new Date(a.created_at);
		const dateB = new Date(b.created_at);
		return dateB.getTime() - dateA.getTime();
	});
</script>

<div class="flex flex-col w-full items-center">
	<div class="lg:max-w-[840px] flex flex-col gap-[20px]">
		<h1 class="font-bold text-xl">{lecture?.title}</h1>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui totam incidunt ratione magnam ut
			odio eligendi ab asperiores quibusdam ducimus molestiae aspernatur, fugiat, non eaque aperiam
			laudantium dolorum rerum accusantium!
		</p>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui totam incidunt ratione magnam ut
			odio eligendi ab asperiores quibusdam ducimus molestiae aspernatur, fugiat, non eaque aperiam
			laudantium dolorum rerum accusantium!
		</p>
		<img src={course?.img} alt="background" />
		<h1 class="font-bold text-xl">One-off Payment Courses</h1>
		<p>
			Subscription style not for you? We also offer one-off purchase lesson packs for students who
			want to study at their own pace. Enroll for lifetime access to our lessons and personal advice
			from our pros!
		</p>
		<img src={onePayOff} alt="one pay off" />
		<h1 class="font-bold text-xl">Feel free to leave us a comment below</h1>
		<p>
			you can attach pictures of your work and ask for advice from our teachers! This is something
			you will be able to enjoy on our paid courses too. Please make sure your questions are related
			to the lesson content.
		</p>
		<div class="flex justify-center">
			<button
				class="btn text-white px-[15px] py-[10px] rounded-md md:w-2/4 flex justify-center items-center gap-[5px] text-xs md:text-md lg:text-lg"
				>Complete and Continue
				<ChevronForwardOutline size="14" />
			</button>
		</div>
		<!-- comments -->
		<div class="border border-gray-200 rounded-md flex flex-col">
			<div class="bg-black md:w-1/4 w-2/4 text-white text-center rounded-md">Discussion</div>
			<div class="p-[15px]">
				<h1 class="font-bold">Post a comment</h1>
				<div class="flex mt-[20px] gap-[20px] items-start flex-col md:flex-row">
					<!-- comment profile -->
					<img src={avatar} alt="profile" class="rounded-full w-[60px] h-[60px]" />
					<!-- comment block -->
					<div class="comment-container w-full p-[20px]">
						<h1 class="text-gray-500">{$authUser?.email}</h1>
						<form on:submit|preventDefault={handlePostComment}>
							<textarea
								name="comment"
								id="comment"
								maxlength="10000"
								class="w-full rounded-md border border-gray-200 p-[10px] h-[120px]"
								placeholder="Leave a comment..."
								bind:value={valuesField.body}
							/>
							{#if errors.body}
								<p class="text-red-600 py-[10px]">{errors.body}</p>
							{/if}
							<div class="flex justify-end py-[15px]">
								<button
									type="submit"
									class="btn text-white px-[15px] py-[10px] rounded-full lg:w-2/4 text-xs md:text-md lg:text-lg"
									>Post Comment
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<!-- total comments -->
			<p class="font-bold p-[15px]">{comments.length} comments</p>
			<!-- list comments -->
			{#each sortedComments as comment}
				<div class="p-[15px]">
					<div class="flex gap-[20px] items-start flex-col lg:flex-row">
						<!-- comment profile -->
						<img src={avatar} alt="profile" class="rounded-full w-[60px] h-[60px]" />
						<!-- comment block -->
						<div class="comment-container max-w-full lg:p-[20px] flex flex-col p-[10px]">
							<div class="flex flex-row gap-[10px]">
								<h1 class="text-sm">{comment.email}</h1>
								<p class="text-gray-400 text-sm">
									{formatDateToLocalDate(comment?.created_at)}
								</p>
							</div>
							<!-- body have a tag -->
							<p class="text-sm">{@html handleUrlLinkBody(comment?.body)}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.btn {
		border: 1px solid #ff3777;
		background-color: #ff3777;
	}
	.comment-container {
		background-color: #efeff5;
	}
</style>
