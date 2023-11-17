<script>
	import User from '$components/User/User.svelte';
	import user1 from '$assets/img/user-reviews/user-1.png';
	import user2 from '$assets/img/user-reviews/user-2.jpg';
	import user3 from '$assets/img/user-reviews/user-3.png';
</script>

<div class="h-full py-[15px]">
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
		/>
	</div>
</div>

<style>
</style>
