<script lang="ts">
	export let titleMain: string;
	export let titleSub: string;
	export let content: string;
	export let img: string;
	export let imgAuthor: string;
	export let price: number | undefined = undefined;
	export let extraClass: string;
	export let authorName: string;
	let activeImg: boolean = false;
	const handleMouseEnterImg = () => {
		activeImg = true;
	};
	const handleMouseLeaveImg = () => {
		activeImg = false;
	};
	export let onClick: any;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="courses-container rounded-t-3xl rounded-b-3xl cursor-pointer {extraClass}"
	on:mouseenter={handleMouseEnterImg}
	on:mouseleave={handleMouseLeaveImg}
	on:click={onClick}
>
	<img
		src={img}
		alt="banner"
		class="rounded-t-3xl w-full {activeImg ? 'active' : 'img-container'}"
	/>
	<div class="article-courses">
		<p class="article-title text-center font-bold">{titleMain}<br />{titleSub}<br /></p>
	</div>
	<span class="article-content text-center">{content}</span>
	<div class="flex justify-between items-center py-[30px] px-[20px] flex-col md:flex-row">
		<div class="h-[30px] flex flex-row items-center gap-[10px]">
			<img src={imgAuthor} alt="author" class="rounded-full" />
			<span class="text-xs md:text-xl">{authorName}</span>
		</div>
		<div class="price">{price ? `${price}$` : 'Free'}</div>
	</div>
</div>

<style>
	.img-container {
		transition: all 0.2s;
		filter: grayscale(1);
	}
	.active {
		box-shadow: 0px 0px 0px 1px #f6c0d1;
		filter: grayscale(0);
	}
	.courses-container:hover .article-title {
		color: #ff3777;
		transition: all linear 0.1s;
	}
	.article-content {
		display: -webkit-box;
		overflow: hidden;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.price {
		color: #ff3777;
	}
	.card-border {
		border: 3px solid #00c2ff;
	}
</style>
	