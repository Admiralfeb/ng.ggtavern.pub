
export interface Game {
    name: string;
    players: number | string;
}

export interface GameSystem {
    short: string;
    system: string;
    games: Game[];
}
