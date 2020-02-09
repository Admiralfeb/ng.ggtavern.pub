import { TestBed } from '@angular/core/testing';

import { DateService } from './date.service';

describe('DateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [DateService]
  }));

  it('should be created', () => {
    const service: DateService = TestBed.inject(DateService);
    expect(service).toBeTruthy();
  });
});
