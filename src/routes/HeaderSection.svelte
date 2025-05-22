<script lang="ts">
	import Poster from '$lib/components/Poster.svelte';
	import TagBlock from '$lib/components/TagBlock.svelte';
	import { Icon } from 'svelte-awesome';
	import { chevronDown } from 'svelte-awesome/icons';
	import Countdown from './Countdown.svelte';
	import TopNavSection from './TopNavSection.svelte';
	import Fly from "$lib/components/Fly.svelte";

	interface Menu {
		label: string
		link?: string
		disabled?: boolean
	}

	const tickets = { label: "Tickets coming soon !", disabled: true };
	const sponsors = { label: "Call for Sponsors", link: "/sponsors" };
	const volunteers = { label: "Call for Volunteers", link: "/volunteers" };
	const papers = { label: "Call for Papers", link: "/papers" };

	const menusLeft: Menu[] = [sponsors, volunteers];
	const menusRight: Menu[] = [papers, tickets];

	const menuStagger = 4;
</script>

<header class="flex-center relative w-full bg-shark header" id="header">
	<Poster />
	<div class="relative mt-3 w-full">
		<TopNavSection></TopNavSection>

		<div class="menu">

			<div class="left">
				<Fly offset={-10}>
					<TagBlock direction="right" extend={true} backgroundColor="north3">
						<div class="inline-flex text-lg text-white">
							<div class="text-xl">
								<span class="pr-4 text-ordina font-bold">Save the date <span class="whitespace-pre">16-10-2025</span></span>
								<Countdown></Countdown>
							</div>
						</div>
					</TagBlock>
				</Fly>
				{#each menusLeft as menu, i}
					<!-- i + 1 because of the Countdown above -->
					<div style:padding-right="{menuStagger * (i + 1)}em">
						<Fly offset={-10} delay={(i + 1) * 200}>
							<TagBlock direction="right" extend={true} backgroundColor="north2" link={menu.link}>
								<div class="inline-flex text-lg">
									<span class="pr-4 text-ordina font-bold" class:disabled={menu.disabled}>{menu.label}</span>
								</div>
							</TagBlock>
						</Fly>
					</div>
				{/each}
			</div>

			<div
				class="middle fade-in"
				style="flex: 0.5; aspect-ratio: 1 / 1; min-width: 15em;"
			>
				<a href="https://pycon-nl.org/" class="logo-container">
					<img src="/logo-sopra4.svg" alt="Python Conference Logo" class="logo" />
				</a>
			</div>

			<div class="right">
				{#each menusRight as menu, i}
					<div style:padding-left="{menuStagger * i}em">
						<Fly offset={10} delay={i * 200}>
							<TagBlock direction="left" extend={true} backgroundColor="north2" link={menu.link}>
								<div class="inline-flex text-lg">
									<span class="pr-4 text-ordina font-bold" class:disabled={menu.disabled}>{menu.label}</span>
								</div>
							</TagBlock>
						</Fly>
					</div>
				{/each}
			</div>

		</div>

		<div class="mt-4 flex items-center justify-center">
			<!-- link="https://www.eventbrite.nl/e/tickets-pycon-nl-916084723067?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl" -->
			<TagBlock
				class="text-lg"
				backgroundColor="north"
			>
				<div class="text-3xl font-bold">
					PYCON NL<span class="px-4">|</span><span class="pr-4 text-ordina">2025</span>
				</div>
			</TagBlock>
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="mt-8 flex justify-center text-white hover:text-north2 transition-all opacity-75 hover:opacity-100 cursor-pointer"
			on:click={() => document.getElementById("info")?.scrollIntoView({ behavior: "smooth" })}
		>
			<div class="my-10 inline">
				<Icon class="" data={chevronDown} scale={3} />
			</div>
		</div>
	</div>
</header>

<style>
	.fade-in {
		opacity: 0;
		animation: anim-fade-in 1s ease-out forwards;
		animation-delay: 100ms;
	}

	@keyframes anim-fade-in {
		to { opacity: 1; }
	}

	.header {
		height: auto;
		min-height: 100vh;
		padding-top: 2rem;
	}

	.menu {
		margin-top: 2rem;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;
		justify-content: center;
	}

	.left, .right {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.left {
		align-items: end;
	}

	.right {
		align-items: start;
	}

	.logo-container {
		width: 100%;
		max-width: 22rem;
	}

	.logo {
		width: 100%;
		height: auto;
	}

	.disabled {
		color: white;
		opacity: 0.5;
		font-style: italic;
		cursor: default;
	}

	@media (max-width: 767px) {
		.header {
			padding-top: 1rem;
		}
		.logo {
			max-width: 80vw;
		}
		.menu {
			flex-direction: column;
		}
		.middle {
			order: 1;
		}
		.left {
			order: 2;
		}
		.right {
			order: 3;
		}
	}
</style>
