<script lang="ts">
	import Fly from "$lib/components/fly/Fly.svelte";
	import Markdown from "$lib/components/core/Markdown.svelte";
	import TagBlock from "$lib/components/core/TagBlock.svelte";
	import { allSchedules } from "$lib/data/schedules";
	import { initials, type Slot } from "$lib/data/types.js";

    export let data;

    const speaker = data.speaker;

    const talks = Object.values(allSchedules)
        .flat()
        .filter(s => s.type === "talk")
        .filter(t => t.speakerId === speaker.id);

    const talkColors = ["north3", "north2", "north"] as const
</script>

<div class="p-8 mt-20 py-6 flex flex-col items-center w-full">
    <div class="mb-12 text-4xl font-bold">{speaker.name}</div>
    <div class="w-full md:max-w-4xl grid md:grid-cols-[0.33fr_0.67fr] gap-8">
        <div class="flex flex-col items-center text-center">
            {#if speaker.image}
                <img class="w-64 aspect-square rounded-full object-contain" src={speaker.image} alt={speaker.name} />
            {:else}
                <div class="w-64 aspect-square rounded-full bg-north-200 grid place-items-center select-none">
                    <span class="text-[6em] text-bold text-white">{initials(speaker)}</span>
                </div>
            {/if}
            <div class="mt-8 text-xl font-bold">{speaker.name}</div>

            {#if speaker.company}
                <div class="text-lg">{speaker.company}</div>
            {/if}
            <div class="text-md italic">{speaker.position}</div>
        </div>
        <div class="flex flex-col text-justify hyphens-auto">
            <div class="font-bold mb-4">Biography:</div>
            <Fly offset={10} duration={1000} delay={0}>
                <Markdown class="flex flex-col gap-4 mb-8" text={speaker.bio} />
            </Fly>
            {#each talks as talk, i}
                <Fly offset={10} duration={1000} delay={200 + 200 * i}>
                    <TagBlock
                        class="mt-2 ml-28"
                        direction="left"
                        extend
                        backgroundColor={talkColors[i % talkColors.length]}
                        link="/talks/{talk.year}/{talk.id}"
                    >
                        <div class="font-bold">PyCon NL {talk.year}:</div>
                        <div class="text-left capitalize">{talk.title}</div>
                    </TagBlock>
                </Fly>
            {/each}
        </div>
    </div>
</div>

<!-- TODO: Past years talks if found -->