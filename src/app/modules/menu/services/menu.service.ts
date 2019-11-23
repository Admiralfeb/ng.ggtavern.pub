import { Injectable } from '@angular/core';
import { DatabaseService } from '@core/services/database.service';
import { MenuItem } from '../menu.models';

@Injectable()
export class MenuService {

  constructor(private db: DatabaseService) { }

  async getMenuItems<T extends MenuItem>(itemType: string): Promise<T[]> {
    const pathString = `menus/food-and-drink/${itemType}`;
    let items: T[] = [];
    try {
      items = await this.db.getItems<T>(pathString);
      return this.sortItems(items, 'name');
    } catch (err) {
      throw err;
    }
  }

  sortItems<T extends MenuItem, P extends keyof T>(items: T[], sortField: P): T[] {
    let sortedItems = this.db.sortItems<T, P>(items, sortField);
    if (sortedItems[0].hasOwnProperty('price')) {
      sortedItems = this.moveHighestPrice(sortedItems);
    }
    return sortedItems;
  }

  private moveHighestPrice<T extends MenuItem>(items: T[]): T[] {
    let currentHighest: T;
    let currentPrice: number;
    for (const item of items) {
      const itemPrice = parseFloat(item.price);
      if (!currentHighest) {
        currentHighest = item;
        currentPrice = parseFloat(currentHighest.price);
      } else if (itemPrice > currentPrice) {
        currentHighest = item;
        currentPrice = parseFloat(currentHighest.price);
      }
    }
    const itemIndex = items.indexOf(currentHighest);
    const newItems = [currentHighest, ...items.slice(0, itemIndex), ...items.slice(itemIndex + 1)];
    return newItems;
  }
}
