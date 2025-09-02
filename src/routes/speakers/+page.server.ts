import { speakers } from "$lib/data/speakers.js";

function shuffled<T>(ts: T[]) {
    return ts.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}

export function load({ }) {
    return {
        speakers: shuffled(speakers.filter(s => s.years.includes(2025)))
    };
}
