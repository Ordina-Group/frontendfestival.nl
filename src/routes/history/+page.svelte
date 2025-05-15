<script lang="ts">
  import { Icon } from 'svelte-awesome';
  import { chevronRight } from 'svelte-awesome/icons';
  import Poster from '$lib/components/Poster.svelte';
  import TagBlock from '$lib/components/TagBlock.svelte';
  import Marquee from "svelte-fast-marquee";
	import TopNavSection from '../TopNavSection.svelte';
	import PracticalInformationSection from '../PracticalInformationSection.svelte';
	import Page from "../+page.svelte";
</script>

<div class="bg-western ">
    <header class="flex-center relative w-full bg-shark" id="header">
        <Poster />
        <TopNavSection></TopNavSection>
    </header>
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
                <video controls>
                    <source src="/AftermoviePythonconference 2023.42.mp4" type="video/mp4">
                        <track kind="captions" />
                </video>
                <div class="mt-4 italic">Short presentation of the “Python Conference” from 2023.</div>
            </div>
        </div>
    </div>
    <PracticalInformationSection></PracticalInformationSection>
</div>
