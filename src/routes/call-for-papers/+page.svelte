<script lang="ts">
	import TagBlock from "$lib/components/TagBlock.svelte";
	import Fly from "$lib/components/Fly.svelte";

    import speaker from "$lib/assets/images/Conference speaker-pana.svg?raw";
</script>

<div class="m-8 mt-20 py-6">
	<div class="m-auto w-full max-w-6xl text-black">

        <div class="flex flex-col items-center">
            <div class="my-8 max-w-xl text-3xl font-bold text-center">
                Thank you for your interest in submitting your proposal for a talk or tutorial to PyCon NL 2025!
            </div>
            <div>
                <p>Please note:</p>
                <ul class="list-disc list-inside mt-2">
                    <li>Proposal deadline: Sunday, August 17, 2025 at 23:59 CEST</li>
                    <li>Conference date: Thursday, October 16, 2025</li>
                    <li>Venue: Jaarbeurs Utrecht, Netherlands</li>
                </ul>
            </div>

            <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 m-auto w-full justify-center">
                <Fly offset={-10} duration={1000}>
                    {@html speaker}
                </Fly>
                <div class="w-full mt-4">
                    <Fly offset={10} duration={1000}>
                        <TagBlock class="max-w-lg" direction="left" backgroundColor="north" extend>
                            <div class="font-bold">Conference Format:</div>
                            PyCon Netherlands 2025 is a multi-track Python conference. Talk slots are 25 minutes (excluding a 5 minute Q&A), Tutorial slots are 105 minutes.
                        </TagBlock>
                    </Fly>
                    <Fly offset={10} duration={1000} delay={200}>
                        <TagBlock class="mt-4 ml-8 max-w-lg" direction="left" backgroundColor="north2" extend>
                            <div class="font-bold">Topics:</div>
                            The topic of your talk or tutorial should interest a broad audience of Python enthusiasts. Note that if your talk or tutorial focuses heavily on data or artificial intelligence, consider submitting your proposal to <a class="font-bold hover:underline" href="https://amsterdam.pydata.org/">PyData Amsterdam</a> instead.
                        </TagBlock>
                    </Fly>
                    <Fly offset={10} duration={1000} delay={400}>
                        <TagBlock class="mt-4 ml-16 max-w-lg" direction="left" backgroundColor="north3" extend>
                            <div class="font-bold">Your Submission:</div>
                            In our experience, attendees pay close attention to proposal abstracts when deciding which talks to attend during the conference. The submitted abstract will be published as is in the conference schedule.
                        </TagBlock>
                    </Fly>
                </div>
            </div>
        </div>

        <div class="mt-4 flex flex-col items-center justify-center">
            <p class="italic text-lg">
                We hope to see you on stage at PyCon NL 2025 on October 16, 2025.
            </p>
            <TagBlock class="mt-8 text-lg" backgroundColor="north" link="https://forms.gle/UrVA9YCaDC6WhD3F7" externalLink>
                <div class="font-bold">
                    Call for Papers form<span class="px-2">|</span><span class="text-ordina">PYCON NL</span>
                </div>
            </TagBlock>
        </div>

    </div>
</div>
