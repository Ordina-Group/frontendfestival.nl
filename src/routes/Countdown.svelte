<script lang="ts">
	const dest = new Date('oct 16, 2025 00:00:00').getTime();

	let days = 0, hours = 0, minutes = 0, seconds = 0;
	const labels = ["days", "hours", "min", "sec"];

	function updateCountdown() {
		let now = new Date().getTime();
		let diff = dest - now;

		days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
		hours = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
		minutes = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
		seconds = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));

		return diff;
	}

	updateCountdown();

	let interval = setInterval(function () {
		const diff = updateCountdown();

		if (diff <= 0) {
			clearInterval(interval);
			return;
		}
	}, 1000);

	function format(n: number) {
		return n.toString().padStart(2, '0');
	}
</script>

<div class="flex items-start w-full gap-2">

	{#if new Date().getTime() >= dest}
		<h3 class="font-manrope font-semibold text-2xl text-gray-900">
			Thanks for coming
		</h3>
	{:else}
		{#each [days, hours, minutes, seconds] as element, i}
			<div class="w-10">
				<div class="bg-north rounded-lg overflow-hidden">
					<h3 class="font-Cormorant font-semibold text-white text-center">
						{format(element)}
					</h3>
				</div>
				<p class="text-sm font-Cormorant font-medium text-gray-900 mt-1 text-center w-full">
					{labels[i]}
				</p>
			</div>
			{#if i < 3}
				<h3 class="font-manrope font-semibold text-2xl text-gray-900">:</h3>
			{/if}
		{/each}
	{/if}

</div>
