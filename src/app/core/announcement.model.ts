import { ID } from '../shared/id.model';
import { Moment } from 'moment-timezone';

/** Used for announcements */
export interface Announcement extends ID {
    /** Message to display */
    message: string;
    /** Action to display to dismiss */
    action: string;
    /** Expire Date in string */
    expiry: string;
    /** Converted date from string */
    expiryDate?: Moment;
}
