<script lang="ts">
    import TagBlock from '$lib/components/TagBlock.svelte';
    import Video from "$lib/components/Video.svelte";

    import growth from "$lib/assets/images/Social Growth-pana.svg?raw";
	import Fly from "$lib/components/Fly.svelte";
	import Storyset from "$lib/components/Storyset.svelte";
</script>

<div class="m-8 mt-20 py-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 m-auto w-full max-w-6xl text-xl text-black items-center">
        <Fly offset={-10} delay={200} duration={1000}>
            {@html growth}
        </Fly>

        <Fly offset={10} duration={1000}>
            <TagBlock class="max-w-lg" direction="left" extend={true} backgroundColor="north2">
                <p>What began as a small meet-up in 2019 with just 40 attendees quickly evolved into something much bigger.</p>
            </TagBlock>

            <TagBlock class="mt-4 ml-6 max-w-lg" direction="left" extend={true} backgroundColor="north3">
                <p>By 2023, the “Python Conference” had grown into a vibrant event, drawing up to 150 participants!</p>
            </TagBlock>

            <TagBlock class="mt-4 ml-12 max-w-lg" direction="left" extend={true} backgroundColor="north2">
                <p>In 2024, the organizing team took a major step forward by applying to the Python Software Foundation to officially host PyCon Netherlands.</p>
            </TagBlock>

            <TagBlock class="mt-4 ml-20 max-w-lg" direction="left" extend={true} backgroundColor="north3">
                <p>We're now proud to say that on October 10th, 2024, we successfully hosted the very first PyCon NL!</p>
            </TagBlock>
        </Fly>
    </div>

    <div class="pt-10 mb-10 flex-center flex-col">
        <div class="mb-10 text-2xl font-bold">PyCon's ancestor, the “Python Conference”:</div>
        <Video
            src="/AftermoviePythonconference 2023.42.mp4"
            message="Short presentation of the “Python Conference” from 2023"
            class="center max-h-[480px]"
        />
    </div>

    <Storyset />
</div>

<style>
    .image > :global(svg) {
        max-height: 20em;
    }
</style>