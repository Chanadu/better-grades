<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Breadcrumbs from '../Sidebar/breadcrumbs.svelte';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<div class="flex flex-row justify-center items-center gap-4">
			<a class="btn-icon btn-icon-lg variant-filled-secondary text-xl" href={'/home'}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					fill="currentColor"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
					/>
				</svg>
			</a>
			<strong class="text-xl uppercase">Better-Grades</strong>
			<Breadcrumbs></Breadcrumbs>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="flex flex-row justify-center items-center gap-4">
			<LightSwitch></LightSwitch>
			<a class="btn btn-lg variant-filled-primary" href={'/gpa'}>GPA</a>
			<div class="btn btn-lg variant-filled-primary">
				<span>First Name Last Name</span>
			</div>
		</div>
	</svelte:fragment>
</AppBar>

<style lang="postcss">
</style>
