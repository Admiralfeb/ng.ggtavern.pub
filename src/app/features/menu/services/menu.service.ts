import { Injectable } from '@angular/core';
import { DatabaseService } from '@core/services/database.service';
import { MenuItem } from '../models/menuitem.model';
import { SortService } from '@core/services/sort.service';
import { MenuSection } from '../models/menu-section.model';

@Injectable()
export class MenuService {
  private menu: MenuSection[] = [];

  constructor(private db: DatabaseService, private sort: SortService) { }

  async isMenuLoaded(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const interval = setInterval(() => {
        if (this.menu.length > 0) {
          clearInterval(interval);
          resolve(true);
        }
      }, 1000);
      setTimeout(() => {
        if (this.menu.length <= 0) {
          reject(false);
        }
      }, 10000);
    });
  }

  /**
   * Gets the game systems from the Database if they do not exist in memory.
   */
  async getMenuSections(): Promise<MenuSection[]> {
    const pathString = `menu`;

    if (this.menu.length > 0) {
      return this.menu;
    }

    try {
      let menu: MenuSection[] = [];
      const itemData = await this.db.getItems<MenuSection>(pathString);
      menu = this.sort.sortItems(itemData, 'name');
      menu = menu.map(section => {
        let items = section.items;
        items = this.sortItems<MenuItem, keyof MenuItem>(items, 'name');
        section.items = items;
        return section;
      });
      this.menu = menu;
      return menu;
    } catch (err) {
      throw err;
    }
  }

  getMenuSection(section: string): MenuSection {
    return this.menu.find(x => x.section === section);
  }

  /**
   * Food-menu specific sort. Calls Database Service to sort alphabetically, then moves the highest price to index 0.
   * @param items items to sort
   * @param sortField field to sort by
   */
  sortItems<T extends MenuItem, P extends keyof T>(items: T[], sortField: P): T[] {
    let sortedItems = this.sort.sortItems<T, P>(items, sortField);
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
