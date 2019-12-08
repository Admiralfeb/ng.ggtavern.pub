import { Injectable } from '@angular/core';
import { DatabaseService } from '@core/services/database.service';
import { MenuItem } from '../models/menuitem.model';

@Injectable()
export class MenuService {

  constructor(private db: DatabaseService) { }

  /**
   * Retrieves menuItems from the database
   * @param itemType Path of item to retrieve (bytes, for example)
   */
  async getMenuItems<T extends MenuItem>(itemType: string): Promise<T[]> {
    const pathString = `menus/food-and-drink/${itemType}`;
    let items: T[] = [];
    try {
      items = await this.db.getItems<T>(pathString);
      return this.sortItems(items, 'name');
      // return items;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Food-menu specific sort. Calls Database Service to sort alphabetically, then moves the highest price to index 0.
   * @param items items to sort
   * @param sortField field to sort by
   */
  sortItems<T extends MenuItem, P extends keyof T>(items: T[], sortField: P): T[] {
    let sortedItems = this.db.sortItems<T, P>(items, sortField);
    if (sortedItems && sortedItems.length > 0) {
      if (sortedItems[0].hasOwnProperty('price')) {
        sortedItems = this.movePriciestIteminList(sortedItems);
      }
    }
    return sortedItems;
  }

  /**
   * Finds item with highest price and moves it to index 0.
   * @param items items to sort
   */
  private movePriciestIteminList<T extends MenuItem>(items: T[]): T[] {
    const priciestItem: T = this.getPriciestItem<T>(items);
    const itemIndex = items.indexOf(priciestItem);
    const newItems = [priciestItem, ...items.slice(0, itemIndex), ...items.slice(itemIndex + 1)];
    return newItems;
  }

  private getPriciestItem<T extends MenuItem>(items: T[]): T {
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
    return currentHighest;
  }
}
