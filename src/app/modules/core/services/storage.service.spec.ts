import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { DomSanitizer } from '@angular/platform-browser';

describe('StorageService', () => {
  let storageService: StorageService;

  const firestoreStub = jasmine.createSpyObj('AngularFireStorage', ['']);
  const sanitizer = jasmine.createSpyObj('DomSanitizer', ['bypass']);

  beforeEach(() => {
    storageService = new StorageService(firestoreStub, sanitizer);
  });

  it('should be created', () => {
    expect(storageService).toBeTruthy();
  });
});
