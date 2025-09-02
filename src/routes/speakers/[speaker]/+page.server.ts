import { speakers } from "$lib/data/speakers.js";
import { error } from "@sveltejs/kit";

export function load({ params }) {
	const speaker = speakers.find((speaker) => speaker.id.toString() === params.speaker);

	if (!speaker) error(404);

    return {
		speaker
	};
}
