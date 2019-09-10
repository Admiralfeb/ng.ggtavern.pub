import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';

describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [MenuService],
  }));

  it('should be created', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service).toBeTruthy();
  });

  it('should return data when given a proper value', () => {
    const service: MenuService = TestBed.get(MenuService);
    const returnValue = service.getMenuItems('bits');
    expect(returnValue).toBeTruthy();
  });

  it('should return undefined when given a non-existent value', () => {
    const service: MenuService = TestBed.get(MenuService);
    const returnValue = service.getMenuItems('rabbits');
    expect(returnValue).toBeUndefined();
  });
});
