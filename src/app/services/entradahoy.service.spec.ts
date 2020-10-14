import { TestBed } from '@angular/core/testing';

import { EntradahoyService } from './entradahoy.service';

describe('EntradahoyService', () => {
  let service: EntradahoyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntradahoyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
