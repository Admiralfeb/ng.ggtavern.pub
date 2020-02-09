import { TestBed } from '@angular/core/testing';

import { AnnouncementService } from './announcement.service';
import { DatabaseService } from './database.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('AnnouncementService', () => {
  const snackbarSpy = jasmine.createSpyObj<MatSnackBar>(['open']);
  const dbSpy = jasmine.createSpyObj<DatabaseService>(['getItemswithID']);
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: DatabaseService, useValue: dbSpy },
      { provide: MatSnackBar, useValue: snackbarSpy },
    ]
  }));

  it('should be created', () => {
    const service: AnnouncementService = TestBed.inject(AnnouncementService);
    expect(service).toBeTruthy();
  });
});
