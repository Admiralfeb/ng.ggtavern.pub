import { ID } from '@shared/id.model';

export interface Game extends ID {
    name: string;
    players: number | string;
}

export interface GameSystem extends ID {
    short: string;
    system: string;
    note?: string;
    games?: Game[];
}
