import { Injectable } from '@angular/core';
import { ID } from '@core/id.model';
import { StitchService } from './stitch.service';
import { RemoteMongoClient, RemoteMongoDatabase } from 'mongodb-stitch-browser-sdk';
import { AuthService } from './auth.service';

/**
 * This service provides access to the database for the project.
 */
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  db: RemoteMongoDatabase;

  constructor(private stitch: StitchService, private auth: AuthService) {
    this.db = stitch.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('ggtavern');
  }

  /**
   * Gets all documents' data on the path specified. Does not retrieve sub-collections.
   * @param queryPath document path for location to query
   */
  async getItems<T>(queryPath: string): Promise<T[]> {
    let items: T[] = [];
    try {
      const collection = this.db.collection<T>(queryPath);
      items = await collection.find().asArray();
      console.log(items);
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
      // const collection = await this.db.collection(queryPath).get().toPromise();
      // if (!collection.empty) {
      //   for (const item of collection.docs) {
      //     const data = item.data() as T;
      //     data.id = item.id;
      //     items = [...items, data];
      //   }
      // }
      return items;
    } catch (err) {
      throw err;
    }
  }
}
