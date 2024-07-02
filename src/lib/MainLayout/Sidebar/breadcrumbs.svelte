<script lang="ts">
	import { page } from '$app/stores';
	import { capitalizeString } from '$lib/index';

	let myBreadcrumbs: { label: string; link: string }[];
	$: {
		let split = $page.url.pathname.split('/');
		myBreadcrumbs = split.map((crumb, i) => {
			return {
				label: capitalizeString(crumb),
				link: split.slice(0, i + 1).join('/')
			};
		});
	}
</script>

<ol class="breadcrumb text-xl">
	{#each myBreadcrumbs as crumb, i}
		<!-- If crumb index is less than the breadcrumb length minus 1 -->
		{#if i < myBreadcrumbs.length - 1}
			<li class="crumb">
				<a class="anchor no-underline text-tertiary-500-400-token hover:underline" href={crumb.link}
					>{crumb.label}</a
				>
			</li>
			<li class="crumb-separator pointer-events-none" aria-hidden>&rsaquo;</li>
		{:else}
			<li class="crumb no-underline text-secondary-500-400-token">{crumb.label}</li>
		{/if}
	{/each}
</ol>

<style lang="postcss">
</style>
