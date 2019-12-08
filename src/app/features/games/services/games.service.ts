import { Injectable } from '@angular/core';
import { DatabaseService } from '@core/services/database.service';
import { GameSystem, Game } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private systems: GameSystem[] = [];

  constructor(private db: DatabaseService) { }

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
      let systems = [];
      const itemData = await this.db.getItems<GameSystem>(pathString);
      systems = this.db.sortItems(itemData, 'system');
      this.systems = systems;
      return systems;
    } catch (err) {
      throw err;
    }
  }

  getSystem(systemShort: string): GameSystem {
    return this.systems.find(x => x.short === systemShort);
  }

  /**
   * Gets the games for the system provided.
   * Will retrieve from the database if they do not exist in memory.
   * @param system The system short name to query
   */
  async getGames(system: string): Promise<Game[]> {
    const pathString = `games/${system}/games`;
    // If we've loaded this already in this instance, don't go to the database.
    const gamesfromsystem = this.getGamesfromSystems(system);
    if (gamesfromsystem) {
      return gamesfromsystem;
    }

    try {
      let games = [];
      const collection = await this.db.getItems<Game>(pathString);
      games = this.db.sortItems(collection, 'name');

      this.setGames(system, games);

      return games;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets the games for the system provided if the system and games are in memory.
   * @param system The system short name to query
   */
  private getGamesfromSystems(system: string): Game[] {
    const foundSystem = this.systems.find(s => s.short === system);
    if (foundSystem) {
      const games = foundSystem.games;
      if (games) {
        return games;
      }
    }
  }

  /**
   * Saves the games to memory to prevent multiple checks of the database in one instance.
   * @param system The system short name to query
   * @param games The games to set to the system
   */
  private setGames(system: string, games: Game[]): void {
    const foundSystem = this.systems.find(s => s.short === system);
    if (foundSystem) {
      foundSystem.games = games;
    }
  }
}
