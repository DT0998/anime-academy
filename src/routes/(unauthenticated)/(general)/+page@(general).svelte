<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$components/Header/Header.svelte';
	import User from '$components/User/User.svelte';
	import Card from '$components/Card/Card.svelte';
	import { authUser } from '$store/auth';
	import videoPr from '$assets/media/home/video.mp4';
	import thumbnailVideo from '$assets/img/home/thumbnail.png';
	import backgroundHeader from '$assets/img/home/banner-1.png';
	import banner2 from '$assets/img/home/banner-2.png';
	import banner3 from '$assets/img/home/banner-3.png';
	import banner4 from '$assets/img/home/banner-4.png';
	import banner5 from '$assets/img/home/banner-5.png';
	import banner6 from '$assets/img/home/banner-6.png';
	import banner7 from '$assets/img/home/banner-7.png';
	import signup from '$assets/img/home/signup.png';
	import imgAuthor from '$assets/img/online-course/our-teacher.png';
	import user1 from '$assets/img/user-reviews/user-1.png';
	import user2 from '$assets/img/user-reviews/user-2.jpg';
	import user3 from '$assets/img/user-reviews/user-3.png';
	import { listCourses } from '$utils/data/dataCourses';

	// media video
	let videoPaused: boolean = true;
	let videoEnded: boolean = false;
	let videoElement: HTMLVideoElement;
	let progress: HTMLDivElement;

	function togglePlayPause() {
		if (videoPaused) {
			videoElement.play();
			videoPaused = false;
		} else {
			videoElement.pause();
			videoPaused = true;
		}
	}

	function handleVideoTimeUpdate() {
		if (videoElement) {
			const progressPOS = (videoElement.currentTime / videoElement.duration) * 100;
			progress.style.width = progressPOS + '%';
		}
	}

	function handleVideoEnded() {
		videoEnded = true;
		videoPaused = true;
	}

	// navigate to course details
	const navigateToCourseDetails = (id: number) => {
		goto(`/online-courses/details/${id}`);
	};
</script>

<main>
	<Header title="Draw manga like a pro!" background={backgroundHeader}>
		<div class="text-xl text-center">
			<div class="py-[20px]">
				<span>Let our professional Japanese manga-ka and illustrator guide you from the </span>
				<br />
				<span> basics, right though to the skills you willneed to reach professional level!</span>
			</div>
			<div class="py-[20px]">
				<span>With in-depth video lessons and unlimited personal guidance from industry</span>
				<br />
				<span>professionals, your dream of being a pro illustrator is closer than you think!</span>
			</div>
		</div>
	</Header>
	<!-- media -->
	<div class="relative w-full h-full flex flex-col items-center">
		<p class="mt-[30px] text-center leading-[28px]">
			Take a look at this speed-drawing video by one of our teachers. With our help, you can learn
			to draw like this too!
		</p>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="video-container w-full md:w-1/2 my-[30px] relative overflow-hidden"
			on:click|stopPropagation={togglePlayPause}
		>
			<video
				class="w-full flex justify-center"
				preload="auto"
				poster={thumbnailVideo}
				bind:this={videoElement}
				on:ended={handleVideoEnded}
				on:timeupdate={handleVideoTimeUpdate}
			>
				<source src={videoPr} />
				<!-- sub video -->
				<track src="captions_en.vtt" kind="captions" srclang="en" label="english_captions" />
			</video>
			<div class="controls absolute flex w-full bottom-0 flex-wrap">
				<div class="h-[10px] w-full top-0 left-0 bg-gray-300">
					<div class="h-[10px] bg-zinc-400" bind:this={progress} />
				</div>
				<div class="w-[30px] h-[50px] text-4xl text-white">
					{#if videoPaused}
						<button class="btn-play" on:click|stopPropagation={togglePlayPause} />
					{:else}
						<button class="btn-pause" on:click|stopPropagation={togglePlayPause} />
					{/if}
				</div>
			</div>
		</div>
	</div>
	<div class="w-full h-full flex relative justify-center">
		<img src={banner2} alt="banner" class="scale-75" />
	</div>

	<!-- courses -->
	<div class="relative h-full text-center">
		<h1 class="text-bold text-3xl mb-[20px]">Featured Courses</h1>
		<div class="rounded-t-3xl flex flex-wrap justify-center pb-[20px] gap-[20px]">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-[30px]">
				{#each listCourses as course}
					<Card
						titleMain={course.titleMain}
						titleSub={course.titleSub}
						content={course.content}
						img={course.img}
						{imgAuthor}
						price={course.price}
						extraClass="card-border"
						authorName={course.authorName}
						onClick={() => navigateToCourseDetails(course.id)}
					/>
				{/each}
			</div>
		</div>
	</div>

	<div class="px-[30px] relative h-full w-full">
		<p class="py-[15px]">
			Anime Art Academy is the one and only online course that is led by a professional Japanese
			<br />illustrator, with full English language support
		</p>
		<a href="about.html" class="sub-3">About Our Teacher</a>
		<div class="flex justify-center w-full">
			<img src={banner3} alt="banner" />
		</div>
		<p class="py-[15px]">
			Our course is brand new, so all of the styles you will learn are up-to-date and in touch with
			the latest anime trends
		</p>
		<div class="flex justify-center w-full">
			<img src={banner4} alt="banner" />
		</div>
		<p class="py-[15px]">
			Once you have completed the advanced levels of our course and gained all the skills you need,
			Anime Art Academy is here for you! We will evaluate your work and find our most excellent
			students. If we think your work is the right level to make it as a professional illustrator in
			Japan, we will support you on your path to becoming a popular artist in Japan!
		</p>
		<div class="flex justify-center w-full">
			<img src={banner5} alt="banner" class="banner-border" />
		</div>
		<p class="py-[15px]">
			Did you know that a top-level professional illustrator in Japan can earn over $5000 for just
			one page of work? To reach that top professional level, usually you would have to go to school
			or collage, paying expensive tuition fees and attending lessons on a strict schedule. But with
			Anime Art Academy, you can enjoy lessons at your own pace, in English, in the comfort of your
			own home - all for a reasonable monthly fee of $35.
		</p>
		<strong class="py-[15px]"
			>The first lesson is totally free, so why not go and take a look?</strong
		>
		<div class="mt-[30px] w-full h-full flex flex-col items-center flex-wrap justify-center">
			<img src={banner6} alt="banner" />
			<img src={banner7} alt="banner" />
		</div>
		{#if !$authUser}
			<div class="w-full h-full flex flex-wrap justify-center">
				<a href="/sign-up"><img src={signup} alt="sign up" /></a>
			</div>
		{/if}
	</div>

	<!-- user review -->
	<div class="h-full py-[30px]">
		<h1 class="text-bold text-3xl mb-[20px] text-center">User Review</h1>
		<div class="rounded-t-3xl flex flex-col mb-[20px] gap-[50px]">
			<User
				comment="I was a total beginner so I wasn't sure if I could follow the content, but everything was explained
			so well, I never felt left behind. After a year at the Academy, I'm proud to call myself an anime
			artist!"
				name="Ellie Townsend"
				avatar={user1}
			/>
			<User
				comment="It's such a help having teachers on hand to give detailed advice in the comments section. Thanks to
			the feedback I've made mad progress! Thanks so much!"
				name="Dwight Brown"
				avatar={user2}
			/>
			<User
				comment="Wow I am very surprised that the course actually is teaching important stuff, usually anime and
			manga tutorials or courses or even books just suck at teaching for beginners especially when it's in
			English, but this course actually has value and is teaching things beginners should know. This first
			lesson did a very good job at teaching the students to understand 3D and learn proportions, anatomy
			and technique (ghosting, drawing with shoulder, drawing arcs/curves) that will be very useful, while
			providing a very fun method to practice it. The method is not the most efficient but people will do
			it more just because it would be fun and you will improve multiple skills at the same time. So far
			I'm really enjoying this and it is obvious the instructor knows what he is talking about."
				name="Riku Dola"
				avatar={user3}
			>
				<a href="/user-review" class="py-[15px]" style="color: #ff3777;">More Testimonials</a>
			</User>
		</div>
	</div>
	{#if !$authUser}
		<div class="w-full h-full flex flex-wrap justify-center">
			<a href="/sign-up"><img src={signup} alt="sign up" /></a>
		</div>
	{/if}
	<!-- policy -->
	<div class="w-full h-full px-[30px] py-[10px]">
		<div>
			<h1 class="text-bold text-3xl">Refund Policy</h1>
			<p class="py-[15px]">
				Because our digital content and services are non-returnable, we are unable to accept any
				refunds based on a student’s personal preferences. We offer free sample lessons for each of
				our courses, and the title and contents of each lesson in the course is also available to
				view before purchase, so please take a look and be sure our lesson content and course style
				is right for you before joining.
			</p>
		</div>
	</div>
</main>

<style>
	.video-container:hover .controls {
		transform: translateY(0);
	}
	.controls {
		background: #ff3777;
		transform: translateY(100%) translateY(-5px);
		transition: all 0.2s;
	}
	.btn-play::before {
		content: '\23F5';
	}
	.btn-pause::before {
		content: '\23F8';
	}
	.banner-border {
		border-bottom: 5px solid #ff1e66;
	}
</style>
