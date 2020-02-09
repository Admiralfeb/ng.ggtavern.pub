import { MenuService } from './menu.service';
import { MiscFoodItem, MenuItem } from '../models';
import { DatabaseService } from '@core/services/database.service';
import { TestBed } from '@angular/core/testing';
import { SortService } from '@core/services/sort.service';
import { MenuSection } from '../models/menu-section.model';

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
    service = TestBed.inject(MenuService);
  });
  afterEach(() => {
    databaseServiceSpy.getItems.calls.reset();
    databaseServiceSpy.getItems.and.stub();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a promise', () => {
    const returnValue = service.getMenuSections();
    expect(returnValue).toEqual(jasmine.any(Promise));
  });

  it('should return an empty array if the collection returns empty', async (done) => {
    databaseServiceSpy.getItems.and.returnValue(Promise.resolve([]));
    const returnValue = await service.getMenuSections();
    expect(returnValue.length).toBe(0);
    done();
  });

  it('should move the priciest item', async () => {
    const testItems: MenuSection[] = [{
      name: 'Items',
      section: '',
      type: 'MenuItem',
      items: [
        { name: 'a', price: '5.00' },
        { name: 'b', price: '6.00' },
        { name: 'c', price: '9.00' },
        { name: 'd', price: '10.00' },
      ]
    }];
    const expectedItems: MenuSection[] = [{
      name: 'Items',
      section: '',
      type: 'MenuItem',
      items: [
        { name: 'd', price: '10.00' },
        { name: 'a', price: '5.00' },
        { name: 'b', price: '6.00' },
        { name: 'c', price: '9.00' },
      ]
    }];
    databaseServiceSpy.getItems.and.returnValue(Promise.resolve<MenuSection[]>(testItems));

    const items = await service.getMenuSections();

    expect(items).toEqual(expectedItems);
  });


});
