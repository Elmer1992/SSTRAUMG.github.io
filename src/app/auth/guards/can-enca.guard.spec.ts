import { TestBed } from '@angular/core/testing';

import { CanEncaGuard } from './can-enca.guard';

describe('CanEncaGuard', () => {
  let guard: CanEncaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanEncaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
