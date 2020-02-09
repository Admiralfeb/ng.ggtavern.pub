import { CalendarEvent } from './calendar-event.model';
import { ID } from '@core/id.model';

export interface Calendar extends ID {
    name: string;
    startDay: number;
    calendarEvents: CalendarEvent[];
}
