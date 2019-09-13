import { Injectable } from '@angular/core';
import { DatabaseService } from '@core/services/database.service';

@Injectable()
export class MenuService {

  constructor(private db: DatabaseService) { }

  async getMenuItems(itemType: string): Promise<any[]> {
    const pathString = `menus/food-and-drink/${itemType}`;
    let items = [];
    try {
      const collection = await this.db.getItems(pathString);
      if (!collection.empty) {
        for (const item of collection.docs) {
          const data = item.data();
          items = [...items, data];
        }
        items = this.sortItems(items, 'name');
      }
      return items;

    } catch (err) {
      console.error(err);
      alert('There was an error, please check your console.');
    }
  }

  sortItems(items: any[], sortField: string) {
    return items.sort((a, b) => a[sortField].localeCompare(b[sortField]));
  }
}
