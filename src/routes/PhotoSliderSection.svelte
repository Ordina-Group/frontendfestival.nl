<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Icon from 'svelte-awesome';
	import {
		faChevronLeft,
		faChevronRight,
		faPause,
		faPlay
	} from '@fortawesome/free-solid-svg-icons';

	const imageModules = Object.values(
		import.meta.glob('/assets/events/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}', {
			eager: true,
			query: {
				enhanced: true
			}
		})
	)
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);

	let isPlaying = true;

	let translateX = 0;
	let animationFrame = 0;
	let lastFrameTime = Date.now();
	let translateSpeed = 0.9; // Adjust for slower or faster animation

	let imageContainer: HTMLElement;
	let imageContainerWidth: number;
	let maxScroll: number;
	$: {
		recalculateSizes(imageContainer);
	}

	function recalculateSizes(imageContainer: HTMLElement) {
		imageContainerWidth = imageContainer?.clientWidth ?? imageModules.length * 2 * 500;
		maxScroll = -imageContainerWidth + (imageContainer?.parentElement?.clientWidth ?? 1000);
		boundsCheck();
	}

	function animate() {
		const now = Date.now();
		const elapsed = now - lastFrameTime;

		if (elapsed > 15) {
			// Adjust this value to control speed. Higher = slower
			const nextTranslate = translateX - translateSpeed;
			translateX = nextTranslate <= maxScroll ? 0 : nextTranslate;
			lastFrameTime = now;
		}

		if (isPlaying) {
			animationFrame = requestAnimationFrame(animate);
		}
	}

	const togglePlay = () => {
		if (isPlaying) {
			cancelAnimationFrame(animationFrame);
		} else {
			lastFrameTime = Date.now();
			animationFrame = requestAnimationFrame(animate);
		}
		isPlaying = !isPlaying;
	};

	function handleTranslateChange(direction: 'left' | 'right') {
		isPlaying = false; // Stop playing when manually controlling direction
		if (animationFrame) {
			cancelAnimationFrame(animationFrame);
		}

		const scrollWidth = imageContainer.children[0].clientWidth;
		translateX = direction === 'left' ? translateX + scrollWidth : translateX - scrollWidth;
		boundsCheck();
	}

	function boundsCheck() {
		if (translateX > 0) {
			translateX = 0;
		} else if (translateX < maxScroll) {
			translateX = maxScroll;
		}
	}

	onMount(() => {
		animationFrame = requestAnimationFrame(animate);
	});

	onDestroy(() => {
		if (animationFrame) {
			cancelAnimationFrame(animationFrame);
		}
	});
</script>

<svelte:window on:resize={() => recalculateSizes(imageContainer)} />
<div
	class="flex-center relative w-full flex-col bg-fountain px-5 py-16 text-black"
	id="past-events"
>
	<div class="text-4xl">Past Events</div>
	<div class="m-auto flex w-full overflow-hidden text-xl">
		<div class="flex min-w-[min-content] gap-2" bind:this={imageContainer}>
			{#each [...imageModules, ...imageModules] as module}
				<div
					class="picture-container flex aspect-[4/3] w-[80vw] items-center justify-center object-cover md:w-96"
					class:pause={!isPlaying}
					style={`transform: translateX(${translateX}px);`}
				>
					<enhanced:img
						class="h-full w-full object-cover"
						src={module.default}
						alt="A past event"
						sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
					/>
				</div>
			{/each}
		</div>
	</div>
	<div class="mt-4 flex flex-row gap-4">
		<button on:click={() => handleTranslateChange('left')}><Icon data={faChevronLeft} /></button>
		<button on:click={togglePlay}>
			{#if isPlaying}
				<Icon data={faPause} />
			{:else}
				<Icon data={faPlay} />
			{/if}
		</button>
		<button on:click={() => handleTranslateChange('right')}><Icon data={faChevronRight} /></button>
	</div>
</div>

<style lang="pcss">
	picture {
		@apply h-full w-full object-cover;
	}

	.picture-container {
		transition: transform 0.9s ease-out;
	}
</style>
