import { GamesService } from './games.service';
import { GameSystem } from '../models/model';

describe('GamesService', () => {
  let gamesService: GamesService;

  const mockService = jasmine.createSpyObj('DatabaseService', ['getItems']);

  beforeEach(() => {
    gamesService = new GamesService(mockService);
  });


  it('should be created', () => {
    expect(gamesService).toBeTruthy();
  });

  it('should call to the database for the Systems when no systems are loaded', async (done) => {
    mockService.getItems.and.returnValue(Promise.resolve());
    await gamesService.getSystems();
    expect(mockService.getItems).toHaveBeenCalled();
    done();
  });

  xit('should not call to the database for Systems when systems are loaded', async (done) => {
    const testSystem: GameSystem[] = [
      { system: 'really cool system', short: 'rcs' }
    ];
    const str = 'systems';
    gamesService[str] = testSystem;

    await gamesService.getSystems();
    expect(mockService.getItems).not.toHaveBeenCalled();
    done();
  });

  it('should show an alert if there is an error in getting Systems or Games', async (done) => {
    spyOn(window, 'alert');
    mockService.getItems.and.returnValue(Promise.reject());
    await gamesService.getSystems();
    await gamesService.getGames('asdf');
    expect(window.alert).toHaveBeenCalledTimes(2);
    done();
  });
});
