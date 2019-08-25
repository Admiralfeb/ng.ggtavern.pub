
export interface Game {
    name: string;
    players: number | string;
}

export interface GameSystem {
    short: string;
    system: string;
    note?: string;
    games: Game[];
}
