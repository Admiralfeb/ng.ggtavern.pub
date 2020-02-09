import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AnnouncementService } from './announcement.service';
import { DialogService } from './dialog.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;
  const fireSpy = jasmine.createSpyObj<AngularFireAuth>(['auth']);
  const announcementSpy = jasmine.createSpyObj<AnnouncementService>(['displayTempMessage']);
  const dialogSpy = jasmine.createSpyObj<DialogService>(['showError']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireAuth, useValue: fireSpy },
        { provide: AnnouncementService, useValue: announcementSpy },
        { provide: DialogService, useValue: dialogSpy },
      ],
      imports: [
        RouterTestingModule
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
