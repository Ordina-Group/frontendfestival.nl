<script>
	import Poster from '$lib/components/Poster.svelte';
	import TagBlock from '$lib/components/TagBlock.svelte';
	import { Icon } from 'svelte-awesome';
	import { chevronDown } from 'svelte-awesome/icons';
</script>

<header class="flex-center relative h-[85vh] w-full bg-shark" id="header">
	<Poster animated />
	<div class="z-50 flex max-h-full flex-col justify-center text-center">
		<h1 class="block w-screen max-w-4xl px-5 py-20">
			<a href="https://frontendfestival.nl">
				<img src="/logo.svg" alt="Frontend Festival Logo" />
			</a>
		</h1>
		<!-- <a
			class="inline"
			target="_blank"
			rel="noreferrer"
			href="https://www.eventbrite.nl/e/frontend-festival-tickets-927209848617"
		> -->
		<TagBlock class="text-lg" backgroundColor="honey-flower">
			<!-- tickets.getYours<span class="font-bold">Now</span>(); -->
			Tickets coming soon!
		</TagBlock>
		<!-- </a> -->
		<div class="mt-10 inline">
			<TagBlock class="text-lg" backgroundColor="soprasteria">
				CFP is <span class="font-bold">opening soon!</span>
			</TagBlock>
		</div>
		<div class="flex-center absolute bottom-0 left-0 w-full">
			<a class="mb-10 inline" href="#info">
				<Icon class="text-white opacity-75" data={chevronDown} scale={3} />
			</a>
		</div>
	</div>
</header>
