import { ID } from './id.model';

export interface Announcement extends ID {
    message: string;
    action: string;
    expiry: Date;
}
