import { Injectable } from '@angular/core';
import { GameSystem, Game } from '../models/model';
import { SortService, AuthService, DatabaseService } from '@core/services';

@Injectable()
export class GamesService {
  private isAuthorized = false;
  private systems: GameSystem[] = [];

  constructor(
    /** Database Service. Used for getting the Systems and Games */
    private db: DatabaseService,
    /** Sort service. Used for sorting Systems and Games */
    private sort: SortService,
    /** Reference to AuthService. Used for Login state. */
    private auth: AuthService) {
    this.auth.getLoginState().subscribe((value: boolean) => {
      this.isAuthorized = value;
    });
  }

  get isLoggedIn(): boolean {
    return this.isAuthorized;
  }

  /** Checks that the systems are loaded once every second for 10 seconds. */
  async systemsLoaded(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const interval = setInterval(() => {
        if (this.systems.length > 0) {
          clearInterval(interval);
          resolve(true);
        }
      }, 1000);
      setTimeout(() => {
        if (this.systems.length <= 0) {
          reject(false);
        }
      }, 10000);
    });
  }
  /** Gets the game systems from the Database if they do not exist in memory. */
  async getSystems(): Promise<GameSystem[]> {
    const pathString = `games`;

    if (this.systems.length > 0) {
      return this.systems;
    }

    try {
      let systems: GameSystem[] = [];
      const itemData = await this.db.getItems<GameSystem>(pathString);
      systems = this.sort.sortItems(itemData, 'system');
      systems = systems.map(system => {
        let games = system.games;
        games = this.sort.sortItems(games, 'name');
        system.games = games;
        return system;
      });
      this.systems = systems;
      return systems;
    } catch (err) {
      throw err;
    }
  }

  getSystem(systemShort: string): GameSystem {
    return this.systems.find(x => x.short === systemShort);
  }

  sortGames(games: Game[]): Game[] {
    return this.sort.sortItems(games, 'name');
  }

}
