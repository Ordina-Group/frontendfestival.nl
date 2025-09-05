<script lang="ts">
	import { speakers } from "$lib/data/speakers";
	import type { Slot } from "$lib/data/types";

    export let columns: number
    export let slot: Slot<any>

    const colSpan = slot.trackType === "common" ? `grid-column: span ${columns} / span ${columns};` : "";
    const rowSpan = slot.type === "talk" && slot.trackType === "single" && slot.multiSlot
        ? `grid-row: span ${slot.multiSlot} / span ${slot.multiSlot}`: "";

    function speaker(speakerId: number) {
        return speakers.find(s => s.id === speakerId);
    }
</script>

{#if slot.type === "talk"}
    {#if slot.trackType === "common"}
        <div style={colSpan} class="rounded-md bg-north-300 text-white p-5 flex flex-col">
            <div>{slot.title}</div>
            <div class="italic text-sm">Keynote</div>
            <div class="font-bold mt-2">{speaker(slot.speakerId)?.name ?? "TBD"}</div>
        </div>
    {:else}
        <div style="{colSpan}{rowSpan}" class="h-full rounded-md bg-north-200 text-white p-5 pb-4 flex flex-col justify-center">
            <div class="text-left">{slot.title}</div>
            <div class="mt-4 flex w-full justify-between">
                <div class="font-bold">{speaker(slot.speakerId)?.name ?? "TBD"}</div>
                <div class="italic text-sm">{slot.multiSlot ? "Workshop" : "Talk"}</div>
            </div>
        </div>
    {/if}
{:else}
    {#if slot.trackType === "common"}
        <div style={colSpan} class="rounded-md bg-north-50 p-5 flex flex-col">
            <div class="italic">{slot.title}</div>
            {#if slot.description}
                <div>{slot.description}</div>
            {/if}
        </div>
    {:else}
        <div style={colSpan} class="rounded-md bg-north-50 p-5 flex flex-col">
            <div>{slot.title}</div>
        </div>
    {/if}
{/if}
