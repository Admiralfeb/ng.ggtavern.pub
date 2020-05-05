import { TestBed } from '@angular/core/testing';

import { StitchService } from './stitch.service';

describe('StitchService', () => {
  let service: StitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
