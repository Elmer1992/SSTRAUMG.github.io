import { TestBed } from '@angular/core/testing';

import { SituaAlumService } from './situa-alum.service';

describe('SituaAlumService', () => {
  let service: SituaAlumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SituaAlumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
