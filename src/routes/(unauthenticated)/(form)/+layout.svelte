<script>
	import '../../../app.css';
	import Footer from '$components/Footer/Footer.svelte';
	import NavBar from '$components/NavBar/NavBar.svelte';
	import { Toaster } from 'svelte-french-toast';
</script>

<div class="flex flex-col min-h-screen justify-between">
	<NavBar extraClass="max-[768px]:justify-center" extraClassInner="justify-center" />
	<Toaster position="top-right" />
	<slot />
	<Footer extraClass="justify-center" />
</div>

<style>
</style>
