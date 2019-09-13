import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFirestore) { }

  async getItems(path: string): Promise<firebase.firestore.QuerySnapshot> {
    return this.db.collection(path).get().toPromise();
  }
}
