export type Year = 2025 // | 2026 | 2027 ...

export const currentYear: Year = 2025

export const rooms = {
    2025: ["Progress", "Quest"],
} as const;

export const timeSlots = {
    2025: ["08:00", "09:30", "09:45", "10:30", "10:45", "11:25", "12:05", "12:35", "13:30", "14:05", "14:35", "14:50", "15:25", "15:55", "16:10", "16:55", "17:05"]
} as const;

export type Speaker = {
    id: number,
    name: string;
    position: string;
    company?: string;
    image?: string;
    bio: string;
    years: Year[]
};

export type Room<Y extends Year> = (typeof rooms)[Y][number]

interface Talk<Y extends Year> {
    year: Y
    title: string
    description: string
    speakerId: number
}

interface SingleTrackTalk<Y extends Year> extends Talk<Y> {
    type: "talk"
    trackType: "single"
    room: Room<Y>
    multiSlot?: number
}

interface CommonTalk<Y extends Year> extends Talk<Y> {
    type: "talk"
    trackType: "common"
    room: string
}

interface SingleTrackEvent<Y extends Year> {
    type: "other"
    trackType: "single"
    title: string,
    room: Room<Y>
}

interface CommonEvent {
    type: "other"
    trackType: "common"
    title: string,
    description?: string,
}

export type Slot<Y extends Year> = (SingleTrackTalk<Y> | CommonTalk<Y> | SingleTrackEvent<Y> | CommonEvent) & {
    timeSlot: (typeof timeSlots)[Y][number]
}

export type Schedule<Y extends Year> = Slot<Y>[]

export function initials(speaker: Speaker) {
    const parts = speaker.name.split(" ")
    return parts[0].at(0)!.toUpperCase() + parts[parts.length - 1].at(0)!.toUpperCase()
}
