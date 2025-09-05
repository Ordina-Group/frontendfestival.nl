<script lang="ts">
	import { schedule2025 } from "$lib/data/schedules";
	import { rooms, timeSlots, type Year } from "$lib/data/types";
	import TimeSlot from "./TimeSlot.svelte";

	const year: Year = 2025

	const rows = timeSlots[year]
	const columns = rooms[year]
</script>

<div class="m-8 mt-20 py-6">
	<div class="m-auto w-full max-w-3xl text-black flex flex-col items-center">
		<div class="font-bold text-3xl">Schedule PyCon NL 2025</div>

		<div class="mt-4 flex flex-col schedule text-center gap-2 items-center">

			<div class="hidden md:block"></div>
			{#each columns as column}
				<div class="hidden md:block">{column}</div>
			{/each}

			{#each rows as row}
				<div class="text-right">{row}</div>

				{@const slots = schedule2025.filter(s => s.timeSlot === row)}

				{#if slots.length === 1 && slots[0].trackType === "common"}
					<TimeSlot columns={columns.length} slot={slots[0]} />
				{:else}
					{#each columns as column}
						{@const slot = slots.find(s => s.trackType === "single" && s.room === column)}
						{#if slot}
							<TimeSlot columns={columns.length} {slot} />
						{/if}
					{/each}
				{/if}

			{/each}
		</div>
	</div>
</div>

<style>
	@media (min-width: 768px) {
		.schedule {
			display: grid;
			grid-template-columns: min-content repeat(2, 1fr);
		}
	}
</style>