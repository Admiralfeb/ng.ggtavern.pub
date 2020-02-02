import { CalendarEvent } from './calendar-event.model';
import { ID } from '@shared/id.model';

/**
 * Calendar to display
 */
export interface Calendar extends ID {
    name: string;
    startDay: number;
    calendarEvents: CalendarEvent[];
}
