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
			name: 'Roelant Dieben',
			letters: 'RD',
			title: 'Cloud & AI architect',
			employer: 'Sopra Steria',
			image: '/speakers/rd.webp',
			bio: 'With over 20 years of experience developing software on the Microsoft stack, Roelant Dieben has a lot to share about stuff that has been obsolete for years. At Sopra Steria he is helping companies with their Azure cloud and AI challenges, he is a Microsoft Azure & AI MVP, and has a passion for machine learning & AI and application lifecycle management.'
		},
		{
			name: 'Coming soon!',
			letters: 'CS',
			title: '',
			employer: '',
			image: '/speakers/coming-soon.webp',
			bio: 'Coming soon!'
		},
		{
			name: 'Coming soon!',
			letters: 'CS',
			title: '',
			employer: '',
			image: '/speakers/coming-soon.webp',
			bio: 'Coming soon!'
		}
	];
	// [
	// 	{
	// 		name: 'Stacy Cashmore',
	// 		letters: 'SC',
	// 		title: 'Tech Explorer DevOps',
	// 		employer: 'Omniplan',
	// 		image: '/speakers/sc.webp',
	// 		bio: 'Speaker, author, and software developer. Stacy has been developing solutions since the mid-1990s in various companies and industries ranging from facilitating contract jobbing to allowing consumers to close a mortgage without the help of a financial adviser – with lots in between.\n\nShe has a passion for sharing knowledge: using storytelling for sharing her experiences to help teams grow in the ways that they develop software and work together and performing live coding demonstrations to inspire others to try new technologies.\n\nStacy published her first book in 2022, aimed at helping developers get started building dynamic applications using C#, Azure Functions, and Azure Static Web Apps. She is currently busy updating it for a second edition with new SWA functionality and using .NET 9.\n\nFor her effort in the community, Stacy has been awarded the Microsoft MVP for Developer Technologies since 2020.'
	// 	},
	// 	{
	// 		name: 'Rowdy Rabouw',
	// 		letters: 'RR',
	// 		title: 'Front-end expert',
	// 		employer: 'Various employers',
	// 		image: '/speakers/rr.webp',
	// 		bio: 'Rowdy Rabouw is a Google Developer Expert in Web Technologies with over 25 years of experience in HTML, CSS, JavaScript, and PHP. Currently, he works as a Front-End-Focused Senior DevOps Engineer on Vue, Node and NestJS projects, paying special attention to usability and accessibility. Rowdy loves watching superhero movies and Formula One races and enjoys riding his mountain bike to unwind.'
	// 	},
	// 	{
	// 		name: 'Jorrik Klijnsma',
	// 		letters: 'JK',
	// 		title: 'Frontend Developer',
	// 		employer: 'Sopra Steria',
	// 		image: '/speakers/jk.webp',
	// 		bio: 'Jorrik is a creative front-end developer at Sopra Steria with a passion for getting and sharing information. He focuses on new and inspiring topics. The moment AI ‘entered the chat’, it won his digital heart. His 8+ years of frontend experience is coming in at a close second.'
	// 	},
	// 	{
	// 		name: 'Roelant Dieben',
	// 		letters: 'RD',
	// 		title: 'Sr. Front-end Engineer / Architect',
	// 		employer: 'Sopra Steria',
	// 		image: '/speakers/bs.webp',
	// 		bio: 'Bjorn is an experienced software developer with lots of experience using Angular, RxJS and TypeScript. He has a passion for anything tech related and is happy to share that passion with people.'
	// 	}
	// ];

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
