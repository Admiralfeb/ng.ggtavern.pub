import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';
import { SharedModule } from '@shared/shared-module.module';

describe('DialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      SharedModule
    ]
  }));

  it('should be created', () => {
    const service: DialogService = TestBed.get(DialogService);
    expect(service).toBeTruthy();
  });
});
