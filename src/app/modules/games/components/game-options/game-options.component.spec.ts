import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameOptionsComponent } from './game-options.component';
import { SharedModule } from '@shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { GamesService } from '../../services/games.service';

describe('GameOptionsComponent (unit)', () => {
  let component: GameOptionsComponent;
  let fixture: ComponentFixture<GameOptionsComponent>;
  const mockService = jasmine.createSpyObj('GamesService', ['getSystems', 'getSystem', 'getGames', 'systemsLoaded']);
  mockService.systemsLoaded.and.returnValue(Promise.resolve());

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

  it('should create', async (done) => {
    await fixture.whenStable();
    expect(component).toBeTruthy();
    done();
  });
});
