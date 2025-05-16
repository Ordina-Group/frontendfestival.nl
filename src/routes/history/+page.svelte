<script lang="ts">
    import TagBlock from '$lib/components/TagBlock.svelte';
    import Video from "$lib/components/Video.svelte";
</script>

<div class="m-8 mt-20 py-6">
    <div class="grid m-auto w-full max-w-6xl text-xl text-black">
        <div>
            <TagBlock class="float-right max-w-lg" direction="left" extend={true} backgroundColor="north2">
                <p>What began as a small meet-up in 2019 with just 40 attendees quickly evolved into something much bigger.</p>
            </TagBlock>
        </div>
        <div class="mt-4">
            <TagBlock class="float-left max-w-lg" direction="right" extend={true} backgroundColor="north3">
                <p>By 2023, the “Python Conference” had grown into a vibrant event, drawing up to 150 participants!</p>
            </TagBlock>
        </div>
        <div class="mt-4">
            <TagBlock class="float-right max-w-lg" direction="left" extend={true} backgroundColor="north2">
                <p>In 2024, the organizing team took a major step forward by applying to the Python Software Foundation to officially host PyCon Netherlands.</p>
                <p>We're now proud to say that on October 10th, 2024, we successfully hosted the very first PyCon NL!</p>
            </TagBlock>
        </div>

        <div class="pt-10 mb-10 flex-center flex-col">
            <Video
                src="/AftermoviePythonconference 2023.42.mp4"
                message="Short presentation of the “Python Conference” from 2023"
                class="center max-h-[480px]"
            />
        </div>
    </div>
</div>
