import { MenuService } from './menu.service';
import { MiscFoodItem } from '../models';
import { DatabaseService } from '@core/services/database.service';

describe('MenuService', () => {
  let menuService: MenuService;

  const mockDatabaseService = jasmine.createSpyObj<DatabaseService>('DatabaseService', ['getItems', 'sortItems']);

  beforeEach(() => {
    menuService = new MenuService(mockDatabaseService);
  });
  afterEach(() => {
    mockDatabaseService.getItems.calls.reset();
    mockDatabaseService.getItems.and.stub();
  });

  it('should be created', () => {
    expect(menuService).toBeTruthy();
  });

  it('should return a promise', () => {
    const returnValue = menuService.getMenuItems('bits');
    expect(returnValue).toEqual(jasmine.any(Promise));
  });

  it('should pass information to the database service for query', async (done) => {
    const returnPromise = menuService.getMenuItems('bits');
    expect(mockDatabaseService.getItems).toHaveBeenCalledWith('menus/food-and-drink/bits');
    done();
  });

  it('should return an empty array if the collection returns empty', async (done) => {
    mockDatabaseService.getItems.and.returnValue(Promise.resolve([]));
    mockDatabaseService.sortItems.and.returnValue([]);
    const returnValue = await menuService.getMenuItems<MiscFoodItem>('');
    expect(returnValue.length).toBe(0);
    done();
  });

});
