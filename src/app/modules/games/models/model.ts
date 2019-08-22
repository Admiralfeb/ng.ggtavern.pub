export interface GameSystem {
    system: string;
    games: Games[];
}
export interface Games {
    name: string;
    players: number | string;
}
