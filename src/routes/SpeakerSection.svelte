<script lang="ts">
	import TagBlock from '$lib/components/TagBlock.svelte';
	import { fade } from 'svelte/transition';

	type Speaker = {
		name: string;
		letters: string;
		title: string;
		employer: string;
		image?: string;
		bio?: string;
	};

	let speakers: Speaker[] = [
		{
			name: 'Davy Engone',
			letters: 'DE',
			title: 'An idea machine',
			employer: '',
			image: '/speakers/de.webp',
			bio: "Davy is a software engineer who loves types. He's building educational tools for developers. He loves sharing knowledge and learning from everyone. If he's not coding, he's spending time with his 2 boys and fiancee. He's also a long distance runner and a basketball player."
		},
		{
			name: 'Servin Nissen',
			letters: 'SN',
			title: 'Founder',
			employer: 'Merlin Studio',
			image: '/speakers/sn.webp',
			bio: "Servin is a co founder at Merlin Studio, a code boutique based in Amsterdam. He builds high end motion first web experiences where design precision meets technical excellence. His focus sits at the intersection of creative front end development, performance and accessibility. He's known for translating ambitious concepts into polished, production ready experiences, with a sharp eye for detail and a calm, collaborative approach."
		},
		{
			name: 'Neil Bhatt',
			letters: 'NB',
			title: '',
			employer: 'Buienradar',
			image: '/speakers/nb.webp',
			bio: 'TBA'
		},
		{
			name: '',
			letters: 'FS',
			title: 'Lightning talk',
			employer: 'Sopra Steria',
			image: '/speakers/coming-soon.webp',
			bio: 'TBA'
		},
		{
			name: 'Tamas Munkacsi',
			letters: 'TM',
			title: 'Engineering Manager',
			employer: 'Adyen',
			image: '/speakers/tm.webp',
			bio: 'TBA'
		}
	];

	let focussedSpeaker: number | null = null;
</script>

<div class="relative w-full bg-gray-300 px-2 py-10 text-white" id="speakers">
	<div class="mb-24 w-full text-center text-4xl text-black">Speakers</div>

	{#if focussedSpeaker === null}
		<div
			in:fade={{ duration: 250, delay: 250 }}
			out:fade={{ duration: 250 }}
			class="mx-auto grid w-3/4 grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3"
		>
			{#each speakers as speaker, index}
				<div class="mb-16 h-56 w-full">
					<div
						class="flex w-full flex-col items-center rounded-2xl bg-honey-flower p-5 text-center shadow-xl"
					>
						{#if speaker.image}
							<img
								class="-mt-16 aspect-square h-32 w-32 rounded-full"
								src={speaker.image}
								alt={speaker.name}
							/>
						{:else}
							<div
								class="relative -mt-16 inline-flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-honey-flower-600"
							>
								<span class="text-6xl font-medium text-honey-flower-800">{speaker.letters}</span>
							</div>
						{/if}
						<div class="text-xl md:text-2xl font-bold">{speaker.name}</div>
						<div class="text-lg italic">{speaker.title}</div>
						<div class="text-md">{speaker.employer}</div>
						<div class="line-clamp-2 overflow-ellipsis text-sm">
							{#if speaker.bio}
								{speaker.bio}
							{:else}
								TypeError: Cannot read properties of undefined (reading 'speakerBiography')
							{/if}
						</div>
						{#if speaker.bio}
							<button
								on:click={() => (focussedSpeaker = index)}
								class="mt-2 cursor-pointer select-none"
							>
								<TagBlock small backgroundColor="soprasteria">Read more</TagBlock>
							</button>
						{:else}
							<TagBlock class="mt-2 opacity-75" small backgroundColor="soprasteria"
								>Bio coming soon..</TagBlock
							>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div
			in:fade={{ duration: 250, delay: 250 }}
			out:fade={{ duration: 250 }}
			class="mx-auto flex w-full flex-col items-center rounded-2xl bg-honey-flower p-5 text-center shadow-xl md:w-2/3 xl:w-1/3"
		>
			{#if speakers[focussedSpeaker].image}
				<img
					class="-mt-16 aspect-square h-32 w-32 rounded-full"
					src={speakers[focussedSpeaker].image}
					alt={speakers[focussedSpeaker].name}
				/>
			{:else}
				<div
					class="relative -mt-16 inline-flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-honey-flower-600"
				>
					<span class="text-6xl font-medium text-honey-flower-800"
						>{speakers[focussedSpeaker].letters}</span
					>
				</div>
			{/if}
			<div class="text-xl">{speakers[focussedSpeaker].name}</div>
			<div class="text-lg">{speakers[focussedSpeaker].title}</div>
			<div class="text-md">{speakers[focussedSpeaker].employer}</div>
			<div class="whitespace-pre-line">
				{#if speakers[focussedSpeaker].bio}
					{speakers[focussedSpeaker].bio}
				{:else}
					TypeError: Cannot read properties of undefined (reading 'speakerBiography')
				{/if}
			</div>
			<button on:click={() => (focussedSpeaker = null)} class="mt-2 cursor-pointer select-none">
				<TagBlock small backgroundColor="soprasteria">Back</TagBlock>
			</button>
		</div>
	{/if}
</div>
