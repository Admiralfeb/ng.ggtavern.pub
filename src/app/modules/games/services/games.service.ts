import { Injectable } from '@angular/core';
import { DatabaseService } from '@core/services/database.service';
import { GameSystem, Game } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private systems: GameSystem[] = [];

  constructor(private db: DatabaseService) { }

  get Systems() {
    return this.systems;
  }

  async getSystems(): Promise<GameSystem[]> {
    const pathString = `games`;
    let systems = [];

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
      alert('There was an error getting the Systems, please check your console.');
    }
  }

  async getGames(system: string): Promise<Game[]> {
    const pathString = `games/${system}/games`;
    let games = [];

    try {
      const collection = await this.db.getItems(pathString);
      if (!collection.empty) {
        for (const game of collection.docs) {
          const data = game.data() as Game;
          games = [...games, data];
        }
        games = this.sortItems(games, 'name');
      }

      return games;
    } catch (err) {
      console.error(err);
      alert('There was an error getting the games, please check your console.');
    }
  }

  sortItems(items: any[], sortField: string) {
    return items.sort((a, b) => a[sortField].localeCompare(b[sortField]));
  }
}
