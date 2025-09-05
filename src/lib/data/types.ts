export type Year = 2025

export const rooms = {
    2025: ["Progress", "Quest"],
} as const;

export const timeSlots = {
    2025: ["07:30", "09:00", "10:30", "12:00", "13:30"]
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

interface SingleSlotTalk<Y extends Year> extends Talk<Y> {
    type: "talk"
    slotType: "single"
    room: Room<Y>
}

interface CommonSlotTalk<Y extends Year> extends Talk<Y> {
    type: "talk"
    slotType: "common"
    room: string
}

interface SingleSlot<Y extends Year> {
    type: "other"
    slotType: "single"
    room: Room<Y>
}

interface CommonSlot {
    type: "other"
    slotType: "common"
    title: string,
    description: string,
}

type Slot<Y extends Year> = (SingleSlotTalk<Y> | CommonSlotTalk<Y> | SingleSlot<Y> | CommonSlot) & {
    timeSlot: (typeof timeSlots)[Y][number]
}

export type Schedule<Y extends Year> = Slot<Y>[]

export function initials(speaker: Speaker) {
    const parts = speaker.name.split(" ")
    return parts[0].at(0)!.toUpperCase() + parts[parts.length - 1].at(0)!.toUpperCase()
}
