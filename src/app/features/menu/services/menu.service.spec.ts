import { MenuService } from './menu.service';
import { MiscFoodItem } from '../models';
import { DatabaseService } from '@core/services/database.service';
import { TestBed } from '@angular/core/testing';
import { SortService } from '@core/services/sort.service';

describe('MenuService', () => {
  let service: MenuService;

  const databaseServiceSpy = jasmine.createSpyObj<DatabaseService>(['getItems']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MenuService,
        { provide: DatabaseService, useValue: databaseServiceSpy },
        SortService
      ]
    });
    service = TestBed.get(MenuService);
  });
  afterEach(() => {
    databaseServiceSpy.getItems.calls.reset();
    databaseServiceSpy.getItems.and.stub();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a promise', () => {
    const returnValue = service.getMenuItems('bits');
    expect(returnValue).toEqual(jasmine.any(Promise));
  });

  it('should pass information to the database service for query', async (done) => {
    const returnPromise = service.getMenuItems('bits');
    expect(databaseServiceSpy.getItems).toHaveBeenCalledWith('menus/food-and-drink/bits');
    done();
  });

  it('should return an empty array if the collection returns empty', async (done) => {
    databaseServiceSpy.getItems.and.returnValue(Promise.resolve([]));
    const returnValue = await service.getMenuItems<MiscFoodItem>('');
    expect(returnValue.length).toBe(0);
    done();
  });

});
