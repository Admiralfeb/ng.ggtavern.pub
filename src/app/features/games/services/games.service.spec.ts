import { GamesService } from './games.service';
import { GameSystem } from '../models/model';
import { DatabaseService } from '@core/services/database.service';
import { TestBed } from '@angular/core/testing';
import { SortService } from '@core/services/sort.service';
import { AuthService } from '@core/services';

describe('GamesService', () => {
  let service: GamesService;

  const mockDatabaseService = jasmine.createSpyObj<DatabaseService>(['getItemswithID']);
  const mockAuthService = jasmine.createSpyObj<AuthService>(['getLoginState']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GamesService,
        { provide: DatabaseService, useValue: mockDatabaseService },
        { provide: AuthService, useValue: mockAuthService },
        SortService
      ]
    });
    service = TestBed.inject(GamesService);
  });

  afterEach(() => {
    mockDatabaseService.getItemswithID.calls.reset();
    mockDatabaseService.getItemswithID.and.stub();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call to the database for the Systems when no systems are loaded', async (done) => {
    mockDatabaseService.getItemswithID.and.returnValue(Promise.resolve([]));
    await service.getSystems();
    expect(mockDatabaseService.getItemswithID).toHaveBeenCalled();
    done();
  });

  it('should not call to the database for Systems when systems are loaded', async (done) => {
    const testSystem: GameSystem[] = [
      { id: 'rcs', system: 'really cool system', short: 'rcs' }
    ];
    const str = 'systems';
    service[str] = testSystem;

    await service.getSystems();
    expect(mockDatabaseService.getItemswithID).not.toHaveBeenCalled();
    done();
  });
});
