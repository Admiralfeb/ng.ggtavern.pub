import { SafeHtml } from '@angular/platform-browser';
import { ID } from '@core/id.model';

export interface Position extends ID {
    name: string;
    order: number;
    workers?: Worker[];
}
export interface Worker {
    name: string;
    quote: string;
    info: string;
    imgPath: string;
    imgUrl?: SafeHtml;
}
