<script lang="ts">
	export let avatar: string;
	export let comment: string;
	export let name: string;
</script>

<div class="flex justify-center items-center md:items-start flex-col md:flex-row gap-[20px] px-[20px]">
	<img src={avatar} alt="user" class="w-[100px] h-[100px] rounded-full" />
	<div class="md:w-2/4 flex flex-col justify-center">
		<p>
			"{comment}"
		</p>
		<strong class="text-start">- {name}</strong>
        <slot/>
	</div>
</div>

<style>
</style>
