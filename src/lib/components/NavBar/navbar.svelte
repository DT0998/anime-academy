<script lang="ts">
	import logo from '$assets/img/nav/logo.png';
	export let extraClass: string | undefined = undefined;
	export let extraClassInner: string | undefined = undefined;
</script>

<nav class="nav w-full flex justify-center items-center max-[768px]:px-[10px] {extraClass}">
	<div class="flex max-w-[960px] items-center w-full {extraClassInner}">
		<!-- menu desk -->
		<div>
			<a href="/"><img src={logo} alt="logo" /></a>
		</div>
		<slot name="desk-menu" />
	</div>
	<!-- menu mobile -->
	<div class="max-[768px]:block min-[1024px]:hidden">
		<div class="relative flex items-center">
			<slot name="mobile-menu" />
		</div>
	</div>
</nav>

<style>
	.nav {
		background-color: #333333;
		position: sticky;
		top: 0;
		z-index: 99;
	}
</style>
