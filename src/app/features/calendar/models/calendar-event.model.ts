import { ID } from '@shared/id.model';

/**
 * Event on the calendar
 */
export interface CalendarEvent extends ID {
    year: number;
    month: number;
    day: number;
    eventName: string;
    time?: string;
    imgString: string;
}
