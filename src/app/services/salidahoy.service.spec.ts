import { TestBed } from '@angular/core/testing';

import { SalidahoyService } from './salidahoy.service';

describe('SalidahoyService', () => {
  let service: SalidahoyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalidahoyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
