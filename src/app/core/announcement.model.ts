import { ID } from '../shared/id.model';
import { Moment } from 'moment-timezone';

export interface Announcement extends ID {
    message: string;
    action: string;
    expiry: string;
    expiryDate?: Moment;
}
