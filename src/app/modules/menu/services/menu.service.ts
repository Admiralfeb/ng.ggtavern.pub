import { Injectable } from '@angular/core';
import { DatabaseService } from '@core/services/database.service';

@Injectable()
export class MenuService {

  constructor(private db: DatabaseService) { }

  async getMenuItems<T>(itemType: string): Promise<T[]> {
    const pathString = `menus/food-and-drink/${itemType}`;
    let items: T[] = [];
    try {
      items = await this.db.getItems<T>(pathString);
      return items;
    } catch (err) {
      throw err;
    }
  }

  sortItems<T, P extends keyof T>(items: T[], sortField: P): T[] {
    // TODO If price exists, list the highest price first, then sort the rest.
    const sortedItems = this.db.sortItems<T, P>(items, sortField);
    if (sortedItems[0].hasOwnProperty('price')) {

    }
    return sortedItems;
  }
}
