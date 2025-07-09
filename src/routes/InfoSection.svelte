<script>
	import Fly from '$lib/components/Fly.svelte';
	import TagBlock from '$lib/components/TagBlock.svelte';
	import Video from '$lib/components/Video.svelte';

	import talk from '$lib/assets/images/Public talk-pana.svg?raw';
	import community from '$lib/assets/images/Team spirit-pana.svg?raw';
	import immerse from '$lib/assets/images/Visual data-pana.svg?raw';
</script>

<div class="z-10 w-full bg-western py-6 text-black custom-info" id="info">
	<div class="text-3xl text-center font-bold">Welcome to PyCon NL!</div>

	<div class="pt-10 mb-10 flex-center">
		<Video
			src="/AftermoviePycon2025.mp4"
			message="Watch the PyCon 2024 Presentation"
			class="center max-h-[480px]"
		/>
	</div>

	<div class="grid md:grid-cols-2 grid-cols-1 m-auto w-full max-w-6xl py-6 text-xl text-black items-center">
		<div class="order-2 md:order-1">
			<Fly offset={-10} duration={1000} delay={200}>
				<TagBlock
					class="float-left max-w-lg"
					direction="right"
					extend={true}
					backgroundColor="north3"
				>
					<p>
					Join us for an <span class="italic">electrifying</span> celebration of Python
					programming at <span class="font-bold">PyCon NL</span>,
					where enthusiasts, professionals, and curious minds converge to explore the
					<span class="italic">endless possibilities</span> of this dynamic language.
					</p>

					<p>
					Inspired by the success of other PyCon events, and fueled by our own
					experience hosting the Python Conference for 4 years,
					<span class="font-bold">PyCon NL</span> promises an
					<span class="italic">unforgettable</span> experience packed with:
					</p>

					<ul class="list-disc list-inside mt-2">
						<li>Insightful talks</li>
						<li>Engaging tutorials</li>
						<li>Vibrant networking opportunities</li>
						<li><span class="font-bold">Plenty of food, drinks, and fun 🎉</span></li>
					</ul>
				</TagBlock>
			</Fly>
		</div>
		<div class="order-1 md:order-2">
			<Fly offset={10} duration={1000} delay={400}>
				{@html talk}
			</Fly>
		</div>

		<div class="order-3 z-[1]">
			<Fly offset={-10} duration={1000} delay={400}>
				<div class="mb-[-3em] md:mb-[-8em]">{@html immerse}</div>
			</Fly>
		</div>
		<div class="order-4">
			<Fly offset={10} duration={1000} delay={200}>
				<TagBlock
					class="float-right max-w-lg mt-14"
					direction="left"
					backgroundColor="north2"
					extend={true}
				>
					<p class="font-bold">What to expect?</p>
					<p>At <span class="font-bold">PyCon NL</span>, expect a lineup of captivating speakers who will delve
					into the latest trends, innovations, and best practices shaping the Python landscape.</p>
					<p>Immerse yourself in a diverse array of talks covering a wide range
					of topics, from web development and data science to machine learning and
					artificial intelligence.</p>
				</TagBlock>
			</Fly>
		</div>

		<div class="order-6 md:order-5">
			<Fly offset={-10} duration={1000} delay={200}>
				<TagBlock
					class="float-left max-w-lg mt-14"
					direction="right"
					extend={true}
					backgroundColor="north3"
				>
					<p>But PyCon NL is not just about passive learning; it's about active participation and
					<span class="font-bold">community building</span>.</p>
					<p>Engage in hands-on tutorials where you can deepen your skills, exchange
					ideas, and collaborate with fellow Python enthusiasts.</p>
					<p>Network with industry leaders, seasoned professionals, and passionate learners,
					forging connections that can propel your career and projects forward.</p>
				</TagBlock>
			</Fly>
		</div>
		<div class="order-5 md:order-6">
			<Fly offset={10} duration={1000} delay={400}>
				{@html community}
			</Fly>
		</div>

		<div class="order-7 flex-center md:col-span-2">
			<div class="mx-4 pt-12 text-xl font-bold max-w-[768px]">
				<p>So, mark your calendars, spread the word, and get ready for an unforgettable experience at
				PyCon NL.</p>
				<p class="mt-4 font-normal">Together, let's embrace the spirit of collaboration, knowledge sharing, and
				community building that defines the essence of Python programming.</p>
				<p class="mt-4">We can't wait to see you there!</p>
			</div>
		</div>

	</div>
</div>

<style>
	/* Styling zodat het goed uitkomt met het klikken van de chevronDown */
	.custom-info {
		padding-top: 6rem;
		margin-top: -3rem;
	}
</style>
