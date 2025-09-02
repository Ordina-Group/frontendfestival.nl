import { speakers } from "$lib/data/speakers.js";
import { error } from "@sveltejs/kit";

// This ensures our static site compilation will pre-render every speaker page
export function entries() {
    return speakers.map(s => ({ speaker: s.id.toString() }))
}

export function load({ params }) {
	const speaker = speakers.find((speaker) => speaker.id.toString() === params.speaker);

	if (!speaker) error(404);

    return {
		speaker
	};
}
