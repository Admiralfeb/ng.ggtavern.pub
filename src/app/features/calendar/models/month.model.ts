import { CalendarEvent } from './calendar-event.model';
import { ID } from '@core/id.model';

export interface Month extends ID {
    name: string;
    month: number;
    year: number;
    weeklies: CalendarEvent[];
    events: CalendarEvent[];
}
