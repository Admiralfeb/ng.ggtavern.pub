import { CalendarEvent } from './calendar-event.model';

export interface Calendar {
    name: string;
    startDay: number;
    calendarEvents: CalendarEvent[];
}
