export interface Position {
    id?: string;
    name: string;
    order: number;
    workers?: Worker[];
}
export interface Worker {
    name: string;
    quote: string;
    info: string;
    imgPath: string;
}
