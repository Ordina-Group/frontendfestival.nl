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
			title: 'Keynote',
			speaker: 'Jad Joubran'
		},
		{
			time: '19:15',
			title: 'Beyond Chatbots: Engineering AI Experiences That Users Actually Love',
			speaker: 'Stacy Cashmore'
		},
		{
			time: '19:45',
			title: 'Break'
		},
		{
			time: '20:00',
			title: 'Welcome to the world of agentic frontend builders',
			speaker: 'Roelant Dieben'
		},
		{
			time: '20:30',
			title: 'DDD Full Stack – from Front to Back',
			speaker: 'Frederieke Scheper & Peter Eijgermans'
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
