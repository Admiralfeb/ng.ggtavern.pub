import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFirestore) { }

  /**
   * Gets all documents on the path specified. Does not retrieve sub-collections.
   * @param queryPath document path for location to query
   */
  async getItems(queryPath: string): Promise<firebase.firestore.QuerySnapshot> {
    return this.db.collection(queryPath).get().toPromise();
  }
}
