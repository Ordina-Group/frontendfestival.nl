<script lang="ts">
	import TagBlock from "$lib/components/TagBlock.svelte";
</script>

<div class="m-8 mt-20 py-6">
	<div class="m-auto w-full max-w-4xl text-black">
        <div class="w-full text-center font-bold text-xl">
            <TagBlock backgroundColor="north3">
                Want to help make PyCon NL 2025 an unforgettable event?
            </TagBlock>
        </div>

        <div class="m-8 w-full flex justify-center">
            <p class="max-w-2xl">
                We're looking for enthusiastic volunteers to support us in organizing the conference! PyCon NL is powered by the community, and we can't do it without you.
            </p>
        </div>

        <div class="w-full">
            <TagBlock class="max-w-lg" direction="right" backgroundColor="fountain" extend>
                <span class="font-bold">There are several ways to contribute</span> — from helping us spread the word, to joining the organizing team, or shaping the content and talks through the program committee.
            </TagBlock>
        </div>

        <div class="my-8 w-full flex flex-col items-center">
            <div class="max-w-2xl">
                <div class="text-xl font-bold">
                    Why volunteer?
                </div>
                <ul class="my-4 pl-8 list-disc">
                    <li>Help create a meaningful event for the Python community</li>
                    <li>Free access to the conference</li>
                    <li>Collaborate with a fantastic team</li>
                    <li>A unique chance to get involved behind the scenes</li>
                </ul>
            </div>

            <div class="mt-8 text-2xl font-bold text-center italic">
                Where we need help
            </div>

            <div class="grid m-auto w-full max-w-2xl">
                <div class="w-full mt-4">
                    <TagBlock class="float-right max-w-lg" direction="left" backgroundColor="north" extend>
                        <div class="font-bold">Promotion & Communication:</div>
                        Social media, newsletters, community outreach
                    </TagBlock>
                </div>

                <div class="w-full mt-4">
                    <TagBlock class="float-left ax-w-lg" direction="right" backgroundColor="north2" extend>
                        <div class="font-bold">Organizing Committee:</div>
                        Help plan logistics, coordinate with partners,<br>and make the event run smoothly
                    </TagBlock>
                </div>

                <div class="w-full mt-4">
                    <TagBlock class="float-right max-w-lg" direction="left" backgroundColor="north3" extend>
                        <div class="font-bold">Program Committee:</div>
                        Help select talks and shape the content of the conference
                    </TagBlock>
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
