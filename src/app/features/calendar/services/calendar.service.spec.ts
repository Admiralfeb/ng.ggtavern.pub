import { TestBed } from '@angular/core/testing';

import { CalendarService } from './calendar.service';
import { DateService } from './date.service';
import { DatabaseService } from '@core/services/database.service';

describe('CalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CalendarService,
      { provide: DateService, useValue: {} },
      { provide: DatabaseService, useValue: {} },
    ]
  }));

  it('should be created', () => {
    const service: CalendarService = TestBed.get(CalendarService);
    expect(service).toBeTruthy();
  });
});
