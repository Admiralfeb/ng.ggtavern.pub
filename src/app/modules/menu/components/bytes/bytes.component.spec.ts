import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BytesComponent } from './bytes.component';
import { SharedModule } from '@shared/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuService } from '../../services/menu.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'environments/environment';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

describe('BytesComponent', () => {
  let component: BytesComponent;
  let fixture: ComponentFixture<BytesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BytesComponent],
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
    fixture = TestBed.createComponent(BytesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
