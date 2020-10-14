import { TestBed } from '@angular/core/testing';

import { CanAlumnGuard } from './can-alumn.guard';

describe('CanAlumnGuard', () => {
  let guard: CanAlumnGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAlumnGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
