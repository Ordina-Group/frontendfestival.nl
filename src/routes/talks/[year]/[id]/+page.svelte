<script lang="ts">
	import Fly from "$lib/components/Fly.svelte";
	import Markdown from "$lib/components/Markdown.svelte";
	import TagBlock from "$lib/components/TagBlock.svelte";
import { speakers } from "$lib/data/speakers.js";

    export let data;

    const talk = data.talk;
    const talkType =
        talk.trackType === "common"
            ? "Keynote"
            : talk.trackType === "single" && talk.multiSlot && talk.multiSlot > 0
                ? "Workshop"
                : "Talk";

    function speaker(speakerId: number) {
        return speakers.find(s => s.id === speakerId);
    }
</script>

<div class="p-8 pt-12 mt-20 py-6 flex flex-col items-center w-full">
    <div class="w-full md:max-w-2xl flex flex-col items-center">
        <div class="mb-4 text-4xl font-bold text-center capitalize">{talk.title}</div>
        <div class="mb-2 text-xl">
            {talkType} presented by:
            <a href="/speakers/{talk.speakerId}" class="underline">{speaker(talk.speakerId)?.name ?? "Unknown"}</a>
        </div>
        <div class="italic text-md">During PyCon NL {talk.year}, at {talk.timeSlot} in {talk.room}</div>
        <div class="bg-[url(/divider.png)] w-full h-24 bg-no-repeat bg-contain bg-center my-8"></div>
        <Markdown text={talk.description} class="text-justify hyphens-auto" />

        <!-- <div class="flex mt-4 px-10 text-center">
            <TagBlock
                direction="left"
                backgroundColor="north3"
                link="/schedule"
            >
                Back to the schedule
            </TagBlock>
            <div class="bg-north-50 grid place-items-center px-8 -mx-8">|</div>
            <TagBlock
                direction="right"
                backgroundColor="north3"
                link="/speakers/{talk.speakerId}"
            >
                Learn more about the speaker
            </TagBlock>
        </div> -->

    </div>
</div>
