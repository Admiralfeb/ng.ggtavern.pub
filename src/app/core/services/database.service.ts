import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ID } from '@core/id.model';

/**
 * This service provides access to the database for the project.
 */
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
   * Gets all documents' data on the path specified. Does not retrieve sub-collections.
   * @param queryPath document path for location to query
   */
  async getItemswithID<T extends ID>(queryPath: string): Promise<T[]> {
    let items: T[] = [];
    try {
      const collection = await this.db.collection(queryPath).get().toPromise();
      if (!collection.empty) {
        for (const item of collection.docs) {
          const data = item.data() as T;
          data.id = item.id;
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

  async setDocument<T extends ID>(queryPath: string, document: T) {
    try {
      console.log('sending to database', document);
      await this.db.collection(queryPath).doc(document.id).set(document);
    } catch (err) {
      throw err;
    }
  }

}
