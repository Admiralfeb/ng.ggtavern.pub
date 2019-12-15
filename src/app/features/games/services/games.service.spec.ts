import { GamesService } from './games.service';
import { GameSystem } from '../models/model';
import { DatabaseService } from '@core/services/database.service';
import { TestBed } from '@angular/core/testing';
import { SortService } from '@core/services/sort.service';

describe('GamesService', () => {
  let service: GamesService;

  const mockDatabaseService = jasmine.createSpyObj<DatabaseService>(['getItems']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GamesService,
        { provide: DatabaseService, useValue: mockDatabaseService },
        SortService
      ]
    });
    service = TestBed.get(GamesService);
  });

  afterEach(() => {
    mockDatabaseService.getItems.calls.reset();
    mockDatabaseService.getItems.and.stub();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call to the database for the Systems when no systems are loaded', async (done) => {
    mockDatabaseService.getItems.and.returnValue(Promise.resolve([]));
    await service.getSystems();
    expect(mockDatabaseService.getItems).toHaveBeenCalled();
    done();
  });

  it('should not call to the database for Systems when systems are loaded', async (done) => {
    const testSystem: GameSystem[] = [
      { system: 'really cool system', short: 'rcs' }
    ];
    const str = 'systems';
    service[str] = testSystem;

    await service.getSystems();
    expect(mockDatabaseService.getItems).not.toHaveBeenCalled();
    done();
  });

  it('should throw an error if there is an error in getting Systems', async (done) => {
    mockDatabaseService.getItems.and.throwError('oops');
    expectAsync(service.getSystems()).toBeRejectedWith(new Error('oops'));
    done();
  });

  it('should throw an error if there is an error in gettingGames', async (done) => {
    mockDatabaseService.getItems.and.throwError('oops');
    expectAsync(service.getGames('')).toBeRejectedWith(new Error('oops'));
    done();
  });
});
