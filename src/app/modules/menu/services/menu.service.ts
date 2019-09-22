import { Injectable } from '@angular/core';
import { DatabaseService } from '@core/services/database.service';

@Injectable()
export class MenuService {

  constructor(private db: DatabaseService) { }

  async getMenuItems(itemType: string): Promise<any[]> {
    const pathString = `menus/food-and-drink/${itemType}`;
    let items = [];
    try {
      const itemData = await this.db.getItems(pathString);
      items = this.sortItems(itemData, 'name');
      return items;
    } catch (err) {
      throw err;
    }
  }

  sortItems(items: any[], sortField: string) {
    return items.sort((a, b) => a[sortField].localeCompare(b[sortField]));
  }
}
