<script>
	import TagBlock from '$lib/components/TagBlock.svelte';
</script>

<div
	class="mt-16 flex-center relative w-full flex-col bg-north-300 py-16 text-white"
	id="practical-information"
>
	<div class="text-4xl font-bold">Practical information</div>

	<TagBlock class="mt-5" direction="right" extend={true} backgroundColor="north3">
		<div class="flex justify-end w-screen max-w-xl gap-5 text-black">
			<div class="pl-5 text-2xl sm:pl-0"><span class="font-bold">When:</span> October 16th 2025</div>
		</div>
	</TagBlock>

	<TagBlock class="mt-8" direction="left" extend={true} backgroundColor="north2">
		<div class="flex w-screen max-w-xl items-center">
			<div class="pl-5 text-2xl" />
			<div class="flex flex-col items-center gap-2 md:flex-row">
				<a target="_blank" rel="noreferrer" href="https://goo.gl/maps/PM1SP5jn8Z9M3LZa7"
					><img
						class=" w-60 rounded-full p-1 ring-2 ring-north-50"
						src="/map.png"
						alt="A map showing where the Jaarbeurs Utrecht is located"
					/></a
				>
				<div class="md:pl-6 flex flex-col">
					<div class="text-2xl"><span class="font-bold">Where:</span> Media Plaza<br>(Jaarbeurs Utrecht)</div>
					<div class="text-xl mt-4">Jaarbeursplein 6</div>
					<div class="text-xl">3521 AL Utrecht</div>
					<div class="text-xl">The Netherlands</div>
					<button class="mt-2 ml-6 cursor-pointer text-left select-none">
						<TagBlock small backgroundColor="ordina" class="hover:scale-105" link='/practical-information'>
							More info
						</TagBlock>
					</button>
				</div>
			</div>
		</div>
	</TagBlock>

	<!-- <div class="mt-10 text-xl">Limited places available, so hurry up!</div> -->

	<!-- <a
		class="mt-5 inline"
		target="_blank"
		rel="noreferrer"
		href="https://www.eventbrite.nl/e/tickets-python-conference-utrecht-715964698687"
	>
		<TagBlock class="text-center text-xl">
			<div class="flex flex-col">
				<div>tickets.get_yours_for_<span class="font-bold">free</span>()</div>
				<div class="text-xs italic">Registration ends October 8th 23:59</div>
			</div>
		</TagBlock>
	</a> -->

	<div class="mt-10 inline flex flex-col gap-4 lg:block">
		<span class="text-sm mt-12 w-full text-center">
    		Made with Svelte
		</span>

		<TagBlock
			class="mx-8"
			backgroundColor="north3" small
			link="https://github.com/Ordina-Group/pythonconferentie.nl"
			externalLink
		>
			Source on GitHub
		</TagBlock>

		<span class="text-sm">
    		<a href="https://storyset.com/people">People illustrations by Storyset</a>
		</span>

	</div>
</div>
