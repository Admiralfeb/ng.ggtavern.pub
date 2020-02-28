import { ID } from '@core/id.model';

export interface Game {
    name: string;
    players: number | string;
}

export interface GameSystem extends ID {
    short: string;
    system: string;
    note?: string;
    games?: Game[];
}
