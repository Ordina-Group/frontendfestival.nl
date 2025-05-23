<script lang="ts">
	import '../reset.pcss';
	import '../tailwind.pcss';

	import PracticalInformationSection from "./PracticalInformationSection.svelte";
	import TopNavSection from "./TopNavSection.svelte";

 	import { afterNavigate } from '$app/navigation';

	let container: HTMLElement;

    afterNavigate(() => {
        container.scrollTo({ top: 0 });
    });
</script>

<svelte:head>
	<title>PyCon NL 2025</title>

	<meta name="title" property="og:title" content="PyCon NL 2025" />
	<meta name="description" property="og:description" content="PyCon NL 2025" />
	<meta name="type" property="og:type" content="website" />
	<meta name="url" property="og:url" content="https://pycon-nl.org/" />
	<meta
		name="image"
		property="og:image"
		content="https://pycon-nl.org/marketing/socials.png"
	/>
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div bind:this={container} class="flex h-screen w-screen flex-col overflow-x-hidden relative">
	<div class="min-h-screen">

		<div class="bg-western">
			<header class="flex-center relative w-full bg-shark" id="header">
				<TopNavSection></TopNavSection>
			</header>

			<slot />

			<div class="w-full flex justify-center -mb-12 mt-12">
				<img src="/footer.png" alt="" class="max-h-[15em] footer" />
			</div>

			<PracticalInformationSection></PracticalInformationSection>
		</div>

	</div>
</div>

