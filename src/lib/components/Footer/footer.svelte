<script lang="ts">
	export let extraClass: string | undefined = undefined;
</script>

<div class="footer-container flex w-full h-full p-[1.25rem] w-full justify-center">
	<div class="flex h-full w-full flex-col md:flex-row max-w-[960px] {extraClass}">
		<div class="h-full text-center">
			<p>&copy; Anime Art Academy 2021</p>
		</div>
		<slot/>
	</div>
</div>

<style>
	.footer-container {
		background-color: #333;
		color: rgba(255, 255, 255, 0.714);
	}

</style>
