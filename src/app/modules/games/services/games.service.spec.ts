import { TestBed } from '@angular/core/testing';

import { GamesService } from './games.service';
import { SharedModule } from '@shared/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'environments/environment';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

describe('GamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      SharedModule,
      BrowserAnimationsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      AngularFireAuthModule],
    providers: [
      GamesService,
      AngularFirestore
    ]
  }));

  it('should be created', () => {
    const service: GamesService = TestBed.get(GamesService);
    expect(service).toBeTruthy();
  });
});
