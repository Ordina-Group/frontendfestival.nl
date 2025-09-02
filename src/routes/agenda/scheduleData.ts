// scheduleData.ts

import { speakers } from "$lib/data/speakers";

export interface ScheduleItem {
  time: string;
  title: string;
  speaker?: typeof speakers[number];
  partialText?: string;
  direction: 'left' | 'right';
  backgroundColor: 'north3' | 'north2' | 'shark' | 'fountain' | 'ordina' | 'soprasteria' | 'north';
  fontBold?: boolean;
  id?: number;
}

export const scheduleItems: ScheduleItem[] = [
  {
    time: "2025-09-13T12:00",
    title: "My Amazing Talk",
    speaker: speakers[0],
    partialText: "foo",
    direction: "left",
    backgroundColor: "north2",
    fontBold: false,
    id: 0,
  }
]
