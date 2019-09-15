import { Injectable } from '@angular/core';
import { DatabaseService } from '@core/services/database.service';
import { GameSystem, Game } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private systems: GameSystem[] = [];

  constructor(private db: DatabaseService) { }

  /**
   * Gets the game systems from the Database if they do not exist in memory.
   */
  async getSystems(): Promise<GameSystem[]> {
    const pathString = `games`;
    let systems = [];

    if (this.systems.length > 0) {
      return this.systems;
    }

    try {
      const collection = await this.db.getItems(pathString);
      if (!collection.empty) {
        for (const item of collection.docs) {
          const data = item.data() as GameSystem;
          systems = [...systems, data];
        }
        systems = this.sortItems(systems, 'system');
      }

      this.systems = systems;
      return systems;
    } catch (err) {
      console.error(err);
      alert('There was an error getting the Systems.');
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
    let games = [];

    // If we've loaded this already in this instance, don't go to the database.
    const gamesfromsystem = this.getGamesfromSystems(system);
    if (gamesfromsystem) {
      return gamesfromsystem;
    }

    try {
      const collection = await this.db.getItems(pathString);
      if (!collection.empty) {
        for (const game of collection.docs) {
          const data = game.data() as Game;
          games = [...games, data];
        }
        games = this.sortItems(games, 'name');
      }

      this.setGames(system, games);

      return games;
    } catch (err) {
      console.error(err);
      alert('There was an error getting the games.');
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

  /**
   * Sorts the provided array of js objects based upon the field specified, then returns the new array.
   * @param items Array of items
   * @param sortField field to sort upon
   */
  sortItems(items: any[], sortField: string) {
    return items.sort((a, b) => a[sortField].localeCompare(b[sortField]));
  }
}
