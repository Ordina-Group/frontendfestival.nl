<script lang="ts">
	import type { PageData } from './$types';
	import SpeakerScheduleSection from './SpeakerScheduleSection.svelte';

	export let data: PageData;
</script>

<div class="m-8 mt-20 py-6">
	<div class="m-auto w-full max-w-6xl text-black">
		<SpeakerScheduleSection />
	</div>
</div>
