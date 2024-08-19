<script lang="ts">
	import TagBlock from '$lib/components/TagBlock.svelte';

	type ScheduleItem = {
		time: string;
		title?: string;
		speaker?: string;
	};

	let schedule: ScheduleItem[] = [
		{
			time: '17:00',
			title: 'Walk-in and dinner'
		},
		{
			time: '18:30',
			title: 'Custom Elements, or How to Make it Easy for People to Use Your Code',
			speaker: 'Stacy Cashmore'
		},
		{
			time: '19:00',
			title: 'Ctrl+Alt+VR: Create VR-First Websites for the 2D Web',
			speaker: 'Jorrik Klijnsma'
		},
		{
			time: '20:00',
			title: 'An Intro to Nx',
			speaker: 'Bjorn Schijff'
		},
		{
			time: '20:30',
			title: 'Beats in the Browser - Coding Music with JavaScript',
			speaker: 'Rowdy Rabouw'
		},
		{
			time: '21:00',
			title: 'Wrap-up & Drinks'
		},
		{
			time: '22:00',
			title: 'Closing'
		}
	];
</script>

<div class="flex-center w-full flex-col bg-shark py-10 text-white" id="schedule">
	<div class="px-2 text-4xl">Speaker schedule</div>
	<div class="px-2 text-xl">The following schedule is not final and is subject to change.</div>

	{#each schedule as item}
		<TagBlock
			class="mt-5"
			direction={item.speaker ? 'left' : 'right'}
			extend
			backgroundColor={item.speaker ? 'ordina' : 'fountain'}
		>
			<div class="flex w-screen max-w-xl gap-5">
				<div class="pl-5 text-2xl sm:pl-0">{item.time}</div>

				{#if item.speaker}
					<div class="inline-flex grow flex-col">
						<div class="text-2xl">{item.title ?? 'Coming soon..'}</div>
						<div class="text-lg">by {item.speaker}</div>
					</div>
				{:else}
					<div class="grow text-2xl">
						{item.title ?? 'Coming soon..'}
					</div>
				{/if}
			</div>
		</TagBlock>
	{/each}
</div>
