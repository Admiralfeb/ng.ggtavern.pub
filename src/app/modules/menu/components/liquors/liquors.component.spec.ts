import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquorsComponent } from './liquors.component';
import { SharedModule } from '@shared/shared-module.module';
import { MenuService } from '../../services/menu.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'environments/environment';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

describe('LiquorsComponent', () => {
  let component: LiquorsComponent;
  let fixture: ComponentFixture<LiquorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LiquorsComponent],
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

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
