import { CalendarEvent } from './calendar-event.model';

export interface Month {
    name: string;
    month: number;
    year: number;
    weeklies: CalendarEvent[];
    events: CalendarEvent[];
}
