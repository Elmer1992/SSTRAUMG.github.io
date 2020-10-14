import { TestBed } from '@angular/core/testing';

import { HistorialsalidaService } from './historialsalida.service';

describe('HistorialsalidaService', () => {
  let service: HistorialsalidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialsalidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
