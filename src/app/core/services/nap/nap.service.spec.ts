import { TestBed } from '@angular/core/testing';

import { NapService } from './nap.service';

describe('NapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NapService = TestBed.get(NapService);
    expect(service).toBeTruthy();
  });
});
