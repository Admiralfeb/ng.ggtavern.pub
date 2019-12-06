import { Injectable } from '@angular/core';
import { Position, Worker } from '../models/about.models';
import { DatabaseService } from '@core/services/database.service';

@Injectable()
export class AboutService {

  constructor(private db: DatabaseService) { }

  async getPositions(): Promise<Position[]> {
    const pathString = `positions`;
    let items: Position[] = [];
    try {
      // items = await this.db.getItems<T>(pathString);
      items = await this.db.getItemsandSingleSub<Position, Worker>(pathString, 'workers');
      items = this.db.sortItems(items, 'order');
      const fullItems = items.map(position => {
        if (position.workers) {
          position.workers = this.db.sortItems(position.workers, 'name');
        }
        return position;
      });
      return fullItems;
    } catch (err) {
      throw err;
    }
  }

  private async getWorkers<T extends Worker>(position: string): Promise<T[]> {
    const pathString = `positions/${position}/workers`;
    let items: T[] = [];
    try {
      items = await this.db.getItems<T>(pathString);
      return this.db.sortItems(items, 'name');
    } catch (err) {
      throw err;
    }
  }
}
