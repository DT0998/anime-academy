<script lang="ts">
	export let title: string | undefined = undefined;
	export let extraClass: string | undefined = undefined;
	export let extraClassInner: string | undefined = undefined;
</script>

<div class="{extraClass}  flex justify-between flex-col">
	<div class="flex flex-col justify-center gap-[20px]">
		{#if title}
			<h1 class="font-bold">{title}</h1>
		{/if}
		<div class="flex {extraClassInner}">
			<h5 class="uppercase py-[20px] text-center">0% complete</h5>
			<div class="h-3 relative max-w-xl rounded-full overflow-hidden">
				<div class="w-full h-full bg-gray-200 absolute" />
				<div class="h-full progress-bar--background absolute rounded-full" style="width:50%" />
			</div>
		</div>
	</div>
</div>

<style>
	.progress-bar--container {
		background-color: #fafafa;
	}
	.progress-bar--background {
		background-color: #ff3777;
	}
</style>
