<script lang="ts">
	import PosterizedImage from "$lib/components/PosterizedImage.svelte";
	import { initials, speakers, type Speaker } from "$lib/data/speakers";
	import tiler from '$lib/assets/images/tiler-pana.svg?raw';
	import { onMount } from "svelte";
	import { scale } from "svelte/transition";

    function shuffled<T>(ts: T[]) {
        return ts.map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
    }

    let shuffledSpeakers: Speaker[] = []

    onMount(() => {
        shuffledSpeakers = shuffled(speakers.filter(s => s.years.includes(2025)))
    })

    const tiles = ["01.png", "02.png"]
</script>

<div class="m-8 mt-20 py-6 flex justify-center">
    <div class="relative max-w-8xl border border-black border-10 px-2 py-10 text-black" id="speakers">

        <div class="mb-2 w-full font-bold text-center text-4xl">Introducing our Speakers</div>
        <div class="mb-16 w-full italic text-center text-2xl">In randomized order</div>

        <div
            class="mx-auto grid gap-10 md:grid-cols-2 xl:grid-cols-3 min-h-screen"
        >
            {#each shuffledSpeakers as speaker, i}
                <div in:scale={{opacity: 0, duration: 1000, start: 1.1, delay: i * 100}} class="mb-10 h-100 w-full">
                    <div class="flex w-full flex-col text-center items-center">
                        <a href="/speakers/{speaker.id}" class="relative aspect-square w-[18em] h-[18em] delfts-blauw">
                            {#if speaker.image}
                                <PosterizedImage
                                    src={speaker.image}
                                    levels={6}
                                    className="absolute inset-0 rounded-md"
                                />
                            {:else}
                                <div class="absolute inset-0 inline-flex items-center justify-center overflow-hidden bg-white rounded-md">
                                    <span class="text-[6em] text-north-200 initials">{initials(speaker)}</span>
                                </div>
                            {/if}
                            <div class="absolute inset-0 w-100 h-100 bg-cover rounded-md" style="background-image: url('tiles/{tiles[i % tiles.length]}')"></div>
                        </a>

                        <div class="mt-12 text-xl md:text-2xl font-bold">{speaker.name}</div>
                        {#if speaker.company}
                            <div class="text-lg">{speaker.company}</div>
                            <div class="text-md italic">{speaker.position}</div>
                        {:else}
                            <div class="text-lg">{speaker.position}</div>
                        {/if}
                    </div>
                </div>
                <!-- <div class="mb-16 h-56 w-full">
                    <div
                        class="flex w-full flex-col items-center rounded-2xl bg-north-50 p-5 text-center shadow-xl"
                    >
                        {#if speaker.image}
                            <img
                                class="-mt-16 aspect-square h-32 w-32 rounded-full"
                                src={speaker.image}
                                alt={speaker.name}
                            />
                        {:else}
                            <div
                                class="relative -mt-16 inline-flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-north-200"
                            >
                                <span class="text-6xl text-white">{speaker.initials}</span>
                            </div>
                        {/if}
                        <div class="text-xl md:text-2xl font-bold">{speaker.name}</div>
                        <div class="text-lg italic">{speaker.position}</div>
                        <div class="text-md">{speaker.company}</div>
                        <div class="line-clamp-2 overflow-ellipsis text-sm">
                            {speaker.bio}
                        </div>
                        <TagBlock small class="mt-2" backgroundColor="north2" link="/speakers/{speaker.id}">Read more</TagBlock>
                    </div>
                </div> -->
            {/each}

            {#if shuffledSpeakers.length > 0}
                <div>
                    {@html tiler}
                </div>
            {/if}

        </div>
    </div>
</div>

<style>
    .delfts-blauw {
        filter: sepia(1.0) hue-rotate(175deg);
        border-radius: 0.375rem;
        transition: all 200ms ease-in-out;
        box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.5);
    }

    .delfts-blauw:hover {
        transform: scale(1.05);
        box-shadow: 10px 30px 30px rgba(0, 0, 0, 0.5);
    }

    .delfts-blauw::before {
        content: "";
        border-radius: 0.375rem;
        position: absolute;
        inset: 0;
        z-index: 3;
        box-shadow:
            inset -3px -3px 3px 0 rgba(0, 0, 0, 0.5),
            inset 5px 5px 5px 0 rgba(255, 255, 255, 1);
    }

    .initials {
        text-transform: uppercase;
        font-family: 'Caveat Brush';
    }
</style>
