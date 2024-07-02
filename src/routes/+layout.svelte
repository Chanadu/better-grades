<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	// Floating UI for Popups
	import Navbar from '$lib/MainLayout/Navigation/navbar.svelte';
	import Sidebar from '$lib/MainLayout/Sidebar/sidebar.svelte';
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<Navbar></Navbar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<Sidebar></Sidebar>
	</svelte:fragment>

	<!-- App Bar -->
	<!-- Page Route Content -->
	<slot></slot>
</AppShell>
