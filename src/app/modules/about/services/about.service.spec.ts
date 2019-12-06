import { AboutService } from './about.service';
import { DatabaseService } from '@core/services/database.service';

describe('AboutService', () => {
  let service: AboutService;

  const mockDatabaseService = jasmine.createSpyObj<DatabaseService>('DatabaseService', ['getItems']);

  beforeEach(() => {
    service = new AboutService(mockDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});