<script lang="ts">
	import { onMount } from 'svelte';

	export let query: string = '';

	let mql: MediaQueryList;
	let mqlListener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null;
	let wasMounted = false;
	let matches = false;

	onMount(() => {
		wasMounted = true;
		return () => {
			removeActiveListener();
		};
	});

	$: {
		if (wasMounted) {
			removeActiveListener();
			addNewListener(query);
		}
	}

	const addNewListener = (query: string) => {
		mql = window.matchMedia(query);
		mqlListener = (v) => (matches = v.matches);
		mql.addListener(mqlListener);
		matches = mql.matches;
	};

	const removeActiveListener = () => {
		if (mql && mqlListener) {
			mql.removeListener(mqlListener);
		}
	};
</script>

<slot {matches} />
