import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFirestore) { }

  /**
   * Gets all documents' data on the path specified. Does not retrieve sub-collections.
   * @param queryPath document path for location to query
   */
  async getItems<T>(queryPath: string): Promise<T[]> {
    let items: T[] = [];
    try {
      const collection = await this.db.collection(queryPath).get().toPromise();
      if (!collection.empty) {
        for (const item of collection.docs) {
          const data = item.data() as T;
          items = [...items, data];
        }
      }
      return items;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets all documents' data on the paths specified. Retrieves a single named subcollection.
   * @param queryPath path to search for initial document(s)
   * @param subPath subPath (from document-level) to search for documents
   */
  async getItemsandSingleSub<T, S>(queryPath: string, subPath: string): Promise<T[]> {
    let items: T[] = [];
    try {
      const collection = await this.db.collection(queryPath).get().toPromise();
      if (!collection.empty) {
        for (const item of collection.docs) {
          const data = item.data() as T;

          let subItems: S[] = [];
          const subCollection = await item.ref.collection(subPath).get();
          if (!subCollection.empty) {
            for (const subItem of subCollection.docs) {
              const subData = subItem.data() as S;
              subItems = [...subItems, subData];
            }
            data[subPath] = subItems;
          }

          items = [...items, data];
        }
      }
      return items;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Sorts provided items and returns a new array
   * @param items array of items to sort
   * @param prop property to sort the items by
   */
  sortItems<T, P extends keyof T>(items: T[], prop: P): T[] {
    try {
      return items.sort(this.comparer(prop));
    } catch {
      return items;
    }
  }

  private comparer(prop) {
    return (a, b) => {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  }
}
