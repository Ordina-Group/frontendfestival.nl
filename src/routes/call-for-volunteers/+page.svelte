<script lang="ts">
	import TagBlock from "$lib/components/TagBlock.svelte";
	import Fly from "$lib/components/Fly.svelte";

    import volunteer from "$lib/assets/images/Hello-pana.svg?raw";
    import organize from "$lib/assets/images/Organizing projects-pana.svg?raw";
    import ambassador from "$lib/assets/images/Ambassador-pana.svg?raw";
</script>

<div class="m-8 mt-20 py-6">
	<div class="m-auto w-full max-w-6xl text-black">
        <div class="w-full text-center font-bold text-xl">
            <TagBlock backgroundColor="north3">
                Want to help make PyCon NL 2025 an unforgettable event?
            </TagBlock>
        </div>

        <div class="w-full flex justify-center top-image -mt-12">
            {@html volunteer}
        </div>

        <div class="mb-8 w-full flex justify-center">
            <p class="max-w-2xl">
                We're looking for enthusiastic volunteers to support us in organizing the conference! PyCon NL is powered by the community, and we can't do it without you.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 m-auto w-full items-center justify-center">
            <Fly offset={-10} duration={1000}>
                <TagBlock class="max-w-lg" direction="right" backgroundColor="fountain" extend>
                    <p class="font-bold">There are several ways to contribute</p>
                    <p>
                        From helping us spread the word, to joining the organizing team, or shaping the content and talks through the program committee.
                    </p>
                </TagBlock>
                <div class="mt-8 max-w-2xl p-8 bg-north3">
                    <div class="text-xl font-bold">
                        Why volunteer?
                    </div>
                    <ul class="mt-4 pl-8 list-disc">
                        <li>Help create a meaningful event for the Python community</li>
                        <li>Free access to the conference</li>
                        <li>Collaborate with a fantastic team</li>
                        <li>A unique chance to get involved behind the scenes</li>
                    </ul>
                </div>
            </Fly>

            <Fly offset={10} duration={1000}>
                {@html ambassador}
            </Fly>
        </div>

        <div>
            <div class="my-8 text-3xl font-bold text-center">
                Where we need help
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 m-auto w-full justify-center">
                <Fly offset={-10} duration={1000}>
                    {@html organize}
                </Fly>
                <div class="w-full mt-4">
                    <Fly offset={10} duration={1000}>
                        <TagBlock class="max-w-lg" direction="left" backgroundColor="north" extend>
                            <div class="font-bold">Promotion & Communication:</div>
                            Social media, newsletters, community outreach
                        </TagBlock>
                    </Fly>
                    <Fly offset={10} duration={1000} delay={200}>
                        <TagBlock class="mt-4 ml-8 max-w-lg" direction="left" backgroundColor="north2" extend>
                            <div class="font-bold">Organizing Committee:</div>
                            Help plan logistics, coordinate with partners,<br>and make the event run smoothly
                        </TagBlock>
                    </Fly>
                    <Fly offset={10} duration={1000} delay={400}>
                        <TagBlock class="mt-4 ml-16 max-w-lg" direction="left" backgroundColor="north3" extend>
                            <div class="font-bold">Program Committee:</div>
                            Help select talks and shape the content of the conference
                        </TagBlock>
                    </Fly>
                </div>
            </div>

            <div class="mt-12 italic text-center">
                Interested? Fill out the form linked below and we'll get in touch:
            </div>
        </div>

        <div class="mt-4 flex items-center justify-center">
            <TagBlock class="text-lg" backgroundColor="north" link="https://forms.office.com/e/zqDxc8eL4e" externalLink>
                <div class="font-bold">
                    Fill form<span class="px-2">|</span><span class="text-ordina">PYCON NL Volunteer Program</span>
                </div>
            </TagBlock>
        </div>

    </div>
</div>

<style>
    .top-image > :global(svg) {
        max-height: 400px;
    }
</style>