import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  let databaseService: DatabaseService;

  let firestoreStub = jasmine.createSpyObj('AngularFirestore', [''])
  beforeEach(() => {
    databaseService = new DatabaseService(firestoreStub);
  });

  it('should be created', () => {
    expect(databaseService).toBeTruthy();
  });
});
