import { Injectable } from '@angular/core';
import { DatabaseService } from '@core/services/database.service';

@Injectable()
export class MenuService {

  constructor(private db: DatabaseService) { }

  getMenuItems(itemType: string) {
    const pathString = `menus/food-and-drink/${itemType}`;
    return new Promise<any[]>((resolve, reject) => {
      let items = [];
      this.db.getItems(pathString).then(collection => {
        if (!collection.empty) {
          collection.forEach(doc => {
            const data = doc.data();
            items = [...items, doc.data()];
          });
        }
        this.sortMenuItems(items, 'name');
        resolve(items);
      }).catch(err => {
        console.error('Error retrieving documents', err);
        reject(err);
      });
    });
  }

  sortMenuItems(items: any[], sortField: string) {
    return items.sort((a, b) => a[sortField].localeCompare(b[sortField]));
  }
}
