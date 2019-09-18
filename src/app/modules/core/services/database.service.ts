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
  async getItems(queryPath: string): Promise<any[]> {
    let items = [];
    try {
      const collection = await this.db.collection(queryPath).get().toPromise();
      if (!collection.empty) {
        for (const item of collection.docs) {
          const data = item.data();
          items = [...items, data];
        }
      }
      return items;
    } catch (err) {
      throw err;
    }
  }
}
