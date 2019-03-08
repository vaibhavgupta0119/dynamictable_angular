import { TestBed } from '@angular/core/testing';

import { InjectableService } from './injectable.service';

describe('InjectableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InjectableService = TestBed.get(InjectableService);
    expect(service).toBeTruthy();
  });
});
