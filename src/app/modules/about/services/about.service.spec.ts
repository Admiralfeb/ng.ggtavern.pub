import { AboutService } from './about.service';
import { DatabaseService } from '@core/services/database.service';
import { DomSanitizer } from '@angular/platform-browser';

describe('AboutService', () => {
  let service: AboutService;

  const mockDatabaseService = jasmine.createSpyObj<DatabaseService>('DatabaseService', ['getItems']);
  const sanitizer = jasmine.createSpyObj('DomSanitizer', ['bypass']);


  beforeEach(() => {
    service = new AboutService(mockDatabaseService, sanitizer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
