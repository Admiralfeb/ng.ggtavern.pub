import { Injectable } from '@angular/core';
import { DatabaseService } from '@core/services/database.service';
import { GameSystem, Game } from '../models/model';
import { SortService } from '@core/services/sort.service';

@Injectable()
export class GamesService {
  private systems: GameSystem[] = [];

  constructor(private db: DatabaseService, private sort: SortService) { }

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
  /**
   * Gets the game systems from the Database if they do not exist in memory.
   */
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
}
