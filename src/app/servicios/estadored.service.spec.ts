import { TestBed } from '@angular/core/testing';

import { EstadoredService } from './estadored.service';

describe('EstadoredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstadoredService = TestBed.get(EstadoredService);
    expect(service).toBeTruthy();
  });
});
