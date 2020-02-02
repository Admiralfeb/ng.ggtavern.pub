import { CalendarEvent } from './calendar-event.model';
import { ID } from '@shared/id.model';

/**
 * Month information
 */
export interface Month extends ID {
    name: string;
    month: number;
    year: number;
    weeklies: CalendarEvent[];
    events: CalendarEvent[];
}
