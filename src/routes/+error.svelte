<script lang="ts">
	import '../app.css';
	import img404 from '$assets/img/404/404.png';
	import Footer from '$components/Footer/Footer.svelte';
	import NavBar from '$components/NavBar/NavBar.svelte';
</script>

<div class="flex flex-col min-h-screen justify-between">
	<NavBar extraClassInner="justify-center" />
	<div class="flex justify-center items-center flex-col flex-1">
		<img src={img404} alt="404" class="max-w-full" />
		<div class="py-[30px]">
			<a
				class="button py-[15px] px-[30px] border-2 border-dashed rounded-full border-yellow-500"
				href="/">Get back home</a
			>
		</div>
	</div>
	<Footer extraClass="justify-center" />
</div>

<style>
</style>
