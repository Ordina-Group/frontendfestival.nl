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
			time: '18:00',
			title: 'Keynote',
			speaker: 'Davy Engone'
		},
		{
			time: '18:50',
			title: 'Eurovision 2021: Crafting a performant & accessible 3D web experience',
			speaker: 'Servin Nissen'
		},
		{
			time: '19:35',
			title: 'Break'
		},
		{
			time: '19:55',
			title: 'Adyen',
			speaker: 'tba'
		},
		{
			time: '20:40',
			title: 'Buien radar',
			speaker: 'tba'
		},
		{
			time: '21:30',
			title: 'Break'
		},
		{
			time: '21:40',
			title: 'Closing keynote',
			speaker: 'tba'
		},
		{
			time: '22:10',
			title: 'Wrap-up & Drinks'
		},
		{
			time: '22:30',
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
			backgroundColor={item.speaker ? 'soprasteria' : 'honey-flower'}
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
