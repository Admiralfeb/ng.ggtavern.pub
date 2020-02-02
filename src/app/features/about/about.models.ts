import { SafeHtml } from '@angular/platform-browser';
import { ID } from '@shared/id.model';

/**
 * Positions at the Goblin
 */
export interface Position extends ID {
    name: string;
    order: number;
    workers?: Worker[];
}

/**
 * Workers in the Positions
 */
export interface Worker extends ID {
    name: string;
    quote: string;
    info: string;
    imgPath: string;
    imgUrl?: SafeHtml;
}
