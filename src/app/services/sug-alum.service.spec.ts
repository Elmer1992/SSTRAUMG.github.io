import { TestBed } from '@angular/core/testing';

import { SugAlumService } from './sug-alum.service';

describe('SugAlumService', () => {
  let service: SugAlumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SugAlumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
