import { allSchedules } from "$lib/data/schedules.js";
import { error } from "@sveltejs/kit";

// This ensures our static site compilation will pre-render every speaker page
export function entries() {
    return Object.values(allSchedules)
        .flat()
        .filter(slot => slot.type === "talk")
        .map(talk => ({ year: talk.year.toString(), id: talk.id.toString() }))
}

export function load({ params }) {
    const talk = Object.values(allSchedules)
        .flat()
        .filter(slot => slot.type === "talk")
        .find(talk => talk.year.toString() === params.year && talk.id.toString() === params.id )

    if (!talk) error(404);

    return {
        talk
    };
}
