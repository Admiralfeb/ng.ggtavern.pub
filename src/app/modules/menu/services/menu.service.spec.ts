import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';
import { SharedModule } from '@shared/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'environments/environment';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      SharedModule,
      BrowserAnimationsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      AngularFireAuthModule],
    providers: [
      MenuService,
      AngularFirestore
    ]
  }));

  it('should be created', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service).toBeTruthy();
  });

  it('should return a promise', () => {
    const service: MenuService = TestBed.get(MenuService);
    const returnValue = service.getMenuItems('bits');
    expect(returnValue).toEqual(jasmine.any(Promise));
  });

  it('should return data when given a proper value', () => {
    const service: MenuService = TestBed.get(MenuService);
    const returnPromise = service.getMenuItems('bits');
    expectAsync(returnPromise).toBeResolved();
  });

  it('should return undefined when given a non-existent value', () => {
    const service: MenuService = TestBed.get(MenuService);
    const returnPromise = service.getMenuItems('rabbits');
    expectAsync(returnPromise).toBeRejected();
  });
});
