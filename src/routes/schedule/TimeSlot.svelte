<script lang="ts">
	import { speakers } from "$lib/data/speakers";
	import type { Slot } from "$lib/data/types";

    export let columns: number
    export let slot: Slot<any>

    const baseClasses = "h-full w-full rounded-md flex flex-col p-5 justify-center"
    const colSpan = slot.trackType === "common" ? `grid-column: span ${columns} / span ${columns};` : "";
    const rowSpan = slot.type === "talk" && slot.trackType === "single" && slot.multiSlot
        ? `grid-row: span ${slot.multiSlot} / span ${slot.multiSlot}`: "";

    function speaker(speakerId: number) {
        return speakers.find(s => s.id === speakerId);
    }
</script>

{#if slot.type === "talk"}
    {#if slot.trackType === "common"}
        <div style={colSpan} class="{baseClasses} bg-north-300 text-white">
            <div class="text-center text-xs md:hidden">Room: {slot.room}</div>
            <div>{slot.title}</div>
            <div class="italic text-sm">Keynote</div>
            <div class="font-bold mt-2">{speaker(slot.speakerId)?.name ?? "TBD"}</div>
        </div>
    {:else}
        <div style="{colSpan}{rowSpan}" class="{baseClasses} bg-north-200 text-white pb-4">
            <div class="text-left text-xs md:hidden">Room: {slot.room}</div>
            <div class="text-left">{slot.title}</div>
            <div class="mt-4 flex w-full justify-between">
                <div class="font-bold">{speaker(slot.speakerId)?.name ?? "TBD"}</div>
                <div class="italic text-sm">{slot.multiSlot ? "Workshop" : "Talk"}</div>
            </div>
        </div>
    {/if}
{:else}
    {#if slot.trackType === "common"}
        <div style={colSpan} class="{baseClasses} bg-north-50">
            <div class="italic">{slot.title}</div>
            {#if slot.description}
                <div class="text-xs">{slot.description}</div>
            {/if}
        </div>
    {:else}
        <div style={colSpan} class="{baseClasses} bg-north-50">
            <div>{slot.title}</div>
        </div>
    {/if}
{/if}
