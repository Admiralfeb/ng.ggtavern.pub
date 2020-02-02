import { ID } from '@shared/id.model';

export interface CalendarEvent extends ID {
    year: number;
    month: number;
    day: number;
    eventName: string;
    time?: string;
    imgString: string;
}
