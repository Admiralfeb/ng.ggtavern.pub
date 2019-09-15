import { MenuService } from './menu.service';

describe('MenuService', () => {
  let menuService: MenuService;

  const mockService = jasmine.createSpyObj('DatabaseService', ['getItems']);

  beforeEach(() => {
    menuService = new MenuService(mockService);
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
    expect(mockService.getItems).toHaveBeenCalledWith('menus/food-and-drink/bits');
    done();
  });

  it('should return an empty array if the collection returns empty', async (done) => {
    const mockCollection = { empty: true };
    mockService.getItems.and.returnValue(Promise.resolve(mockCollection));
    const returnValue = await menuService.getMenuItems('');
    expect(returnValue.length).toBe(0);
    done();
  });

});
