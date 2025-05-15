<script>
	import TagBlock from '$lib/components/TagBlock.svelte';
	import Video from '$lib/components/Video.svelte';
</script>

<div class="z-10 w-full bg-western py-6 text-black custom-info" id="info">
	<div class="text-3xl text-center font-bold">Welcome to PyCon NL!</div>

	<div class="pt-10 mb-10 flex-center">
		<Video
			src="/AftermoviePycon2025.mp4"
			message="Watch the PyCon 2025 Presentation"
			class="center max-h-[480px]"
		/>
	</div>

	<div class="grid m-auto w-full max-w-6xl py-6 text-xl text-black">
		<div>
			<TagBlock
				class="float-left max-w-lg"
				direction="right"
				extend={true}
				backgroundColor="north3"
			>
				<p>Join us for an electrifying celebration of Python programming at PyCon NL, where
				enthusiasts, professionals, and curious minds converge to explore the endless possibilities
				of this dynamic language.</p>
				<p>Inspired by the success of other PyCon events, but also our own
				previous experience with organizing and hosting the Python Conference for 4 years, PyCon NL
				promises an unforgettable experience packed with insightful talks, engaging workshops,
				vibrant networking opportunities, and of course, plenty of food, drinks, and fun!</p>
			</TagBlock>
		</div>
		<div>
			<TagBlock
				class="float-right max-w-lg "
				direction="left"
				backgroundColor="north2"
				extend={true}
			>
				<p class="font-bold">What to expect?</p>
				<p>At PyCon NL, expect a lineup of captivating speakers who will delve
				into the latest trends, innovations, and best practices shaping the Python landscape.</p>
				<p>Immerse yourself in a diverse array of talks covering a wide range
				of topics, from web development and data science to machine learning and
				artificial intelligence.</p>
			</TagBlock>
		</div>

		<div>
			<TagBlock
				class="float-left max-w-lg"
				direction="right"
				extend={true}
				backgroundColor="north3"
			>
				<p>But PyCon NL is not just about passive learning; it's about active participation and
				community building.</p>
				<p>Engage in hands-on workshops where you can deepen your skills, exchange
				ideas, and collaborate with fellow Python enthusiasts.</p>
				<p>Network with industry leaders, seasoned professionals, and passionate learners,
				forging connections that can propel your career and projects forward.</p>
			</TagBlock>
		</div>
		<div class="flex-center">
			<div class="mx-4 pt-12 text-xl font-bold max-w-[768px]">
				<p>So, mark your calendars, spread the word, and get ready for an unforgettable experience at
				PyCon NL.</p>
				<p class="mt-4 font-normal">Together, let's embrace the spirit of collaboration, knowledge sharing, and
				community building that defines the essence of Python programming.</p>
				<p class="mt-4">We can't wait to see you there!</p>
			</div>
		</div>
		<div class="clear-both" />
	</div>
</div>

<style>
	/* Styling zodat het goed uitkomt met het klikken van de chevronDown */
	.custom-info {
		padding-top: 6rem;
		margin-top: -3rem;
	}
</style>
