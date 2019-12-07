import { SafeHtml } from '@angular/platform-browser';

export interface Position {
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
