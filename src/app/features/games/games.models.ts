import { ID } from '@shared/id.model';

/**
 * Game
 */
export interface Game extends ID {
    name: string;
    players: number | string;
}

/**
 * Game System
 */
export interface GameSystem extends ID {
    short: string;
    system: string;
    note?: string;
    games?: Game[];
}
