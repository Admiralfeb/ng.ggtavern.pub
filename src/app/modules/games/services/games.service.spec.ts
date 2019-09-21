import { GamesService } from './games.service';
import { GameSystem } from '../models/model';

describe('GamesService', () => {
  let gamesService: GamesService;

  const mockDatabaseService = jasmine.createSpyObj('DatabaseService', ['getItems']);

  beforeEach(() => {
    gamesService = new GamesService(mockDatabaseService);
  });

  afterEach(() => {
    mockDatabaseService.getItems.calls.reset();
    mockDatabaseService.getItems.and.stub();
  });

  it('should be created', () => {
    expect(gamesService).toBeTruthy();
  });

  it('should call to the database for the Systems when no systems are loaded', async (done) => {
    mockDatabaseService.getItems.and.returnValue(Promise.resolve());
    await gamesService.getSystems();
    expect(mockDatabaseService.getItems).toHaveBeenCalled();
    done();
  });

  it('should not call to the database for Systems when systems are loaded', async (done) => {
    const testSystem: GameSystem[] = [
      { system: 'really cool system', short: 'rcs' }
    ];
    const str = 'systems';
    gamesService[str] = testSystem;

    await gamesService.getSystems();
    expect(mockDatabaseService.getItems).not.toHaveBeenCalled();
    done();
  });

  it('should throw an error if there is an error in getting Systems', async (done) => {
    mockDatabaseService.getItems.and.throwError('oops');
    expectAsync(gamesService.getSystems()).toBeRejectedWith(new Error('oops'));
    done();
  });

  it('should throw an error if there is an error in gettingGames', async (done) => {
    mockDatabaseService.getItems.and.throwError('oops');
    expectAsync(gamesService.getGames('')).toBeRejectedWith(new Error('oops'));
    done();
  });
});
