import { SafeHtml } from '@angular/platform-browser';
import { ID } from '@shared/id.model';

export interface Position extends ID {
    name: string;
    order: number;
    workers?: Worker[];
}
export interface Worker extends ID {
    name: string;
    quote: string;
    info: string;
    imgPath: string;
    imgUrl?: SafeHtml;
}
