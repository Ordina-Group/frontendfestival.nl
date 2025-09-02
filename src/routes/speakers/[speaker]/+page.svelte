<script lang="ts">
	import Fly from "$lib/components/Fly.svelte";
	import TagBlock from "$lib/components/TagBlock.svelte";
	import { initials } from "$lib/data/speakers.js";

    export let data;
    const speaker = data.speaker;
</script>

<div class="p-8 mt-20 py-6 flex flex-col items-center w-full">
    <div class="mb-12 text-3xl font-bold">Speaker: {speaker.name}</div>
    <div class="w-full md:max-w-4xl grid md:grid-cols-[0.33fr_0.67fr] gap-8">
        <div class="flex flex-col items-center text-center">
            {#if speaker.image}
                <img class="w-64 rounded-full" src={speaker.image} alt={speaker.name} />
            {:else}
                <div class="w-64 aspect-square rounded-full bg-north-200 grid place-items-center select-none">
                    <span class="text-[6em] text-bold text-white">{initials(speaker)}</span>
                </div>
            {/if}
            <div class="mt-8 text-xl font-bold">{speaker.name}</div>

            {#if speaker.company}
                <div class="text-lg">{speaker.company}</div>
                <div class="text-md italic">{speaker.position}</div>
            {:else}
                <div class="text-lg">{speaker.position}</div>
            {/if}
        </div>
        <div class="flex flex-col text-justify hyphens-auto">
            <div class="font-bold mb-4">Biography:</div>
            <Fly offset={10} duration={1000} delay={0}>
                <div class="flex flex-col gap-4">
                    {#each speaker.bio.split("\n") as paragraph}
                        <p>{paragraph}</p>
                    {/each}
                </div>
            </Fly>
            <Fly offset={10} duration={1000} delay={200}>
                <TagBlock
                    class="mt-10 ml-28"
                    direction="left"
                    extend
                    backgroundColor="north3"
                >
                    Talk information coming soon
                </TagBlock>
            </Fly>
        </div>
    </div>
</div>

<!-- TODO: Past years talks if found -->