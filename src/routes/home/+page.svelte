<script lang="ts">
	const items = Array.from({ length: 7 }, (_, i) => i);
</script>

<div class="container h-full mx-auto flex justify-center gap-12 text-6xl items-center flex-col">
	<div class="flex flex-row gap-8 w-5/6 h-1/3 justify-evenly">
		{#each items.slice(0, 4) as item, i}
			<button class="btn btn-xl text-6xl variant-ghost-primary">{item}</button>
		{/each}
	</div>
	<div class="flex flex-row gap-8 w-5/6 h-1/3 justify-evenly">
		{#each items.slice(4) as item, i}
			<button class="btn btn-xl text-6xl variant-ghost-primary">{item}</button>
		{/each}
	</div>
</div>

<style lang="postcss">
</style>
