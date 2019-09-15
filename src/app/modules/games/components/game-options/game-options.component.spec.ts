import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOptionsComponent } from './game-options.component';
import { SharedModule } from '@shared/shared-module.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteStub } from '@test/activated-route-stub';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'environments/environment';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GamesService } from '../../services/games.service';

describe('GameOptionsComponent (unit)', () => {
  let component: GameOptionsComponent;
  let fixture: ComponentFixture<GameOptionsComponent>;
  const mockService = jasmine.createSpyObj('GamesService', ['getSystems', 'getSystem', 'getGames']);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameOptionsComponent],
      imports: [SharedModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        // AngularFireModule.initializeApp(environment.firebase),
        // AngularFirestoreModule,
        // AngularFireAuthModule
      ],
      providers: [
        { provide: GamesService, useValue: mockService }
        // GamesService,
        // AngularFirestore
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(GameOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
